"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import type { ProjectEntry, ProjectOverview, SideProjectItem } from "@/types/portfolio";

const ProjectOverview = () => {
  const { language } = useLanguage();
  const [projectData, setProjectData] = useState<ProjectOverview | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/page-data?lang=${language}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjectData(data?.projectOverview);
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
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                {language === "pt" ? "Projetos principais" : "Case studies"}
              </p>
              <div className="flex flex-col gap-6">
                {projectData?.caseStudies?.map((value: ProjectEntry, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-1.5">
                      <Link
                        href={value?.url}
                        target="_blank"
                        className="group inline-flex w-fit items-center gap-2"
                      >
                        <h4>{value?.name}</h4>
                        <Image
                          src={"/images/icon/tile-arrow-icon.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                        />
                      </Link>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                {language === "pt" ? "Outros projetos" : "Side projects"}
              </p>
              <div className="flex flex-col gap-6">
                {projectData?.sideProjects?.map((value: SideProjectItem, index) => {
                  const isComingSoon =
                    "comingSoon" in value && value.comingSoon === true;

                  const titleRow = (
                    <div className="inline-flex w-fit flex-wrap items-center gap-2">
                      <h4
                        className={`${isComingSoon ? "text-muted-foreground" : "text-primary"}`}
                      >
                        {value?.name}
                      </h4>
                      {!isComingSoon ? (
                        <Image
                          src={"/images/icon/tile-arrow-icon.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                        />
                      ) : (
                        <div className="py-1.5 px-3 bg-muted rounded-lg">
                          <p className="text-xs md:text-base font-normal text-muted-foreground">
                            {language === "pt" ? "Em breve" : "Coming soon"}
                          </p>
                        </div>
                      )}
                    </div>
                  );

                  const desc =
                    "description" in value && value.description ? (
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
                        {value.description}
                      </p>
                    ) : null;

                  return isComingSoon ? (
                    <div key={index} className="flex flex-col gap-1.5">
                      {titleRow}
                      {desc}
                    </div>
                  ) : "url" in value && value.url ? (
                    <div key={index} className="flex flex-col gap-1.5">
                      <Link
                        href={value.url}
                        target="_blank"
                        className="group inline-flex w-fit flex-wrap items-center gap-2"
                      >
                        {titleRow}
                      </Link>
                      {desc}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
