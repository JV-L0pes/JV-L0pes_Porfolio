"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import type { FeaturedWorkItem } from "@/types/portfolio";

const FeaturedWork = () => {
  const { language } = useLanguage();
  const [featureWork, setFeatureWork] = useState<FeaturedWorkItem[] | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/featured-work?lang=${language}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, [language]);

  return (
    <section>
      <div className="container">
        <div className="border-x border-border">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                {language === "pt" ? "Projetos em destaque" : "Featured work"}
              </p>
              <Button
                variant={"outline"}
                className="h-auto py-3 px-5"
                nativeButton={false}
                render={
                  <Link href={"https://github.com/JV-L0pes"} target="_blank">
                    {language === "pt" ? "Ver GitHub" : "View GitHub"}
                  </Link>
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            {featureWork?.map((value, index) => {
              const isRightCol = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-border" : ""}`}
                >
                  <Link
                    href={value.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden"
                  >
                    <Image
                      src={value?.image}
                      alt=""
                      width={490}
                      height={300}
                      className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </Link>
                  <div className="flex flex-col gap-1.5 sm:gap-2 px-2">
                    <Link
                      href={value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      <h4>{value?.title}</h4>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value?.description}
                    </p>
                    <div className="flex">
                      <p className="text-sm">{value?.roles?.join(", ")}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
