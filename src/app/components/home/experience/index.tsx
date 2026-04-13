"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import type { ExperienceItem } from "@/types/portfolio";

const Experience = () => {
  const { language } = useLanguage();
  const [experienceData, setExperienceData] = useState<
    ExperienceItem[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/page-data?lang=${language}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExperienceData(data?.experienceData);
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
                {language === "pt" ? "Experiência" : "Experience"}
              </p>
            </div>
          </div>
          <div className="border-t border-border">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
              {experienceData?.map((value, index) => {
                const isCurrent =
                  value.endYear === "Present" || value.endYear === "Atual";
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-5 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                  >
                    <Image
                      src={value.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="object-contain object-left"
                      aria-hidden
                    />
                    <div className="flex flex-wrap gap-5 items-center justify-between">
                      <h5>{value?.role}</h5>
                      <div className="flex items-center gap-2.5 border border-border rounded-lg py-1.5 px-3">
                        <div
                          className={`w-4 h-2 rounded-sm ${isCurrent ? "bg-primary" : "bg-primary/10"} `}
                        />
                        <p className="text-sm xs:text-base text-primary">
                          {value?.startYear} – {value?.endYear} ·{" "}
                          {value?.location}
                        </p>
                      </div>
                    </div>
                    <ul>
                      {value?.bulletPoints?.map((point, pointIndex) => {
                        return (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 text-base font-normal text-muted-foreground"
                          >
                            <span className="w-2.5 h-2.5 text-muted-foreground">
                              •
                            </span>
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
