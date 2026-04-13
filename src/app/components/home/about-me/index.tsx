"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

const AboutMe = () => {
  const { language } = useLanguage();
  const servicesBedge = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Azure AD",
    "Jira",
    "n8n",
    "Machine Learning",
    "Computer Vision",
  ];
  return (
    <section>
      <div className="container">
        <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                {language === "pt" ? "Sobre Mim" : "About Me"}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                {language === "pt"
                  ? "Olá. Eu sou João Victor Lopes Rosa — desenvolvedor full stack, atualmente "
                  : "Hi. I'm João Victor Lopes Rosa — a full stack developer currently "}
                <span className="bg-[linear-gradient(90deg,rgba(243,202,77,0.4)_0%,rgba(243,202,77,0.05)_100%)]">
                  {language === "pt"
                    ? "construindo produto em ambiente real"
                    : "building real-world product systems"}
                </span>{" "}
                {language === "pt"
                  ? <>na <span className="border-b-2">AutoU</span>, com foco em interfaces, APIs, integrações e automação.</>
                  : <>at <span className="border-b-2">AutoU</span>, focused on interfaces, APIs, integrations, and automation.</>}
              </h2>
              <h5 className="text-secondary font-normal">
                {language === "pt"
                  ? "Também atuo em projetos acadêmicos na FATEC Jacareí e em projetos próprios com IA aplicada."
                  : "I also contribute to academic projects at FATEC Jacareí and build personal projects with applied AI."}
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                {language === "pt" ? "Stack" : "Stack"}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesBedge?.map((value, index) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={index}
                      className="py-1.5 px-3 rounded-lg h-full"
                    >
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {value}
                      </p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
