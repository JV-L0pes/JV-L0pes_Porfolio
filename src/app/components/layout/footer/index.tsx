"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="-translate-y-px bg-white border-t border-border">
      <div className="container">
        <div className="border-x border-border">
          <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
            <p>
              2026 © {language === "pt" ? "Desenvolvido por" : "Built by"}{" "}
              <Link
                href={"https://github.com/JV-L0pes"}
                target="_blank"
                className="hover:text-primary"
              >
                João Victor Lopes Rosa
              </Link>{" "}
              — {language === "pt" ? "Todos os direitos reservados" : "All rights reserved"}{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
