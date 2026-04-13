"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const HERO_BANNER_AUTO_MS = 4000;

const HERO_BANNERS = [
  {
    src: "/images/hero-sec/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg",
    altPt: "Vista superior de mesa com laptop em ambiente escuro, tela iluminada.",
    altEn: "Top view of a desk with a laptop in a dark setting, lit screen.",
  },
  {
    src: "/images/hero-sec/laptop-half-closed-dark-with-colorful-glow.jpg",
    altPt: "Laptop semiaberto com brilho colorido na tela.",
    altEn: "Half-closed laptop with colorful glow on the display.",
  },
  {
    src: "/images/hero-sec/closeup-computer-screen-software-developer-typing-programming-language-it-startup-agency-display-concept-system-engineer-writing-source-code-scrolling-text-database-functions-script.jpg",
    altPt: "Close de tela com código e contexto de desenvolvimento de software.",
    altEn: "Close-up of a screen with code in a software development context.",
  },
] as const;

const HeroSection = () => {
  const { language, setLanguage } = useLanguage();
  const [activeBanner, setActiveBanner] = useState(0);
  const [pauseRotation, setPauseRotation] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (pauseRotation) return;
    const id = window.setInterval(() => {
      setActiveBanner((i) => (i + 1) % HERO_BANNERS.length);
    }, HERO_BANNER_AUTO_MS);
    return () => window.clearInterval(id);
  }, [pauseRotation]);
  const socialIcon = [
    {
      img: "/images/icon/github-icon.svg",
      href: "https://github.com/JV-L0pes",
      label: "GitHub",
      external: true,
    },
    {
      img: "/images/icon/instagram-icon.svg",
      href: "https://www.instagram.com/jv_l0pez?igsh=MTV5ZjlpdXkyamU4eA==",
      label: "Instagram",
      external: true,
    },
    {
      img: "/images/icon/linkedin-icon.svg",
      href: "https://www.linkedin.com/in/jv-l0pes",
      label: "LinkedIn",
      external: true,
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="">
          <div
            className="relative h-76 w-full overflow-hidden md:h-78"
            role="region"
            aria-roledescription="carousel"
            aria-label={
              language === "pt"
                ? "Imagens de destaque no topo do portfólio"
                : "Hero images at the top of the portfolio"
            }
            onMouseEnter={() => setPauseRotation(true)}
            onMouseLeave={() => setPauseRotation(false)}
          >
            {HERO_BANNERS.map((banner, index) => (
              <Image
                key={banner.src}
                src={banner.src}
                fill
                sizes="100vw"
                priority={index === 0}
                alt={language === "pt" ? banner.altPt : banner.altEn}
                aria-hidden={index !== activeBanner}
                className={cn(
                  "object-cover object-center",
                  reduceMotion
                    ? "transition-none"
                    : "transition-opacity duration-700 ease-in-out",
                  index === activeBanner
                    ? "z-1 opacity-100"
                    : "pointer-events-none z-0 opacity-0"
                )}
              />
            ))}
            <div
              className="pointer-events-none absolute bottom-3 right-3 z-5 flex gap-2"
              role="tablist"
              aria-label={
                language === "pt" ? "Selecionar imagem do banner" : "Select banner image"
              }
            >
              {HERO_BANNERS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeBanner}
                  aria-label={
                    language === "pt"
                      ? `Banner ${index + 1} de ${HERO_BANNERS.length}`
                      : `Banner ${index + 1} of ${HERO_BANNERS.length}`
                  }
                  onClick={() => setActiveBanner(index)}
                  className={cn(
                    "pointer-events-auto h-2 w-2 cursor-pointer rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
                    index === activeBanner
                      ? "bg-white"
                      : "bg-white/45 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="relative z-10 border-x border-border">
            <div
              className="absolute right-3 top-3 z-10 sm:right-5 sm:top-4"
              role="group"
              aria-label={language === "pt" ? "Idioma" : "Language"}
            >
              <div className="inline-flex rounded-full border border-border bg-background/95 p-0.5 text-xs font-medium shadow-sm backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => setLanguage("pt")}
                  className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors sm:px-3 ${
                    language === "pt"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  PT-BR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors sm:px-3 ${
                    language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <div
              className={cn(
                "relative mx-auto flex max-w-3xl flex-col items-center justify-center px-4 pt-22 pb-8 sm:px-7 sm:pb-12 xs:flex-row xs:items-start xs:justify-between",
                language === "pt"
                  ? "gap-10 xs:gap-8 sm:gap-10 md:gap-12"
                  : "gap-10 xs:gap-3"
              )}
            >
              <div className="absolute top-0 z-20 -translate-y-1/2 transform">
                <Image
                  src={"/images/hero-sec/user-img.jpeg"}
                  alt={
                    language === "pt"
                      ? "Retrato de João Victor Lopes Rosa"
                      : "Portrait of João Victor Lopes Rosa"
                  }
                  width={145}
                  height={145}
                  className="border-4 border-white rounded-full object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1 className="w-full max-w-full whitespace-nowrap text-center text-[clamp(0.8125rem,4.2vw,2rem)] font-semibold leading-tight tracking-tight xs:w-auto xs:text-left sm:text-2xl md:text-3xl">
                  João Victor Lopes Rosa
                </h1>
                <p className="text-violet-700 font-normal">
                  {language === "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer"}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon/map-icon.svg"}
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-primary">{language === "pt" ? "Brasil" : "Brazil"}</p>
                </div>
              </div>
              <div
                className={cn(
                  "flex flex-col items-center gap-4 md:flex-row",
                  language === "pt" &&
                    "mt-3 xs:mt-0 xs:pl-2 sm:pl-3 md:pl-4"
                )}
              >
                <div className="flex items-center gap-2">
                  {socialIcon?.map((value, index) => {
                    return (
                      <Link
                        href={value.href}
                        key={index}
                        aria-label={value.label}
                        {...(value.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-primary/5 sm:h-12 sm:w-12"
                      >
                        <Image
                          src={value.img}
                          alt=""
                          width={26}
                          height={26}
                          className="object-contain"
                          aria-hidden
                        />
                      </Link>
                    );
                  })}
                </div>
                <Button className="h-auto cursor-pointer rounded-full p-0">
                  <Link
                    href="mailto:joaovlr9@gmail.com"
                    aria-label={
                      language === "pt"
                        ? "Enviar e-mail para joaovlr9@gmail.com"
                        : "Send email to joaovlr9@gmail.com"
                    }
                    className="inline-block rounded-full bg-[linear-gradient(96.09deg,#9282F8_12.17%,#F3CA4D_90.71%)] p-0.5"
                  >
                    <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,#9282F8_12.17%,#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                      <Image
                        src="/images/icon/spark-icon.svg"
                        alt="spark-icon"
                        width={14}
                        height={14}
                      />
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {language === "pt" ? "Entrar em contato" : "Get in touch"}
                      </span>
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
