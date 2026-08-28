"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import { messages, type Language, type MessageKey } from "@/lib/messages";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: MessageKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const TITLES: Record<Language, string> = {
  pt: "João Victor Lopes Rosa · Arquitetura de Produto",
  en: "João Victor Lopes Rosa · Product Architecture",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("jv-lang");
      if (stored === "pt" || stored === "en") setLanguageState(stored);
    } catch {
      /* localStorage indisponivel: segue no padrao */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    document.title = TITLES[language];
    try {
      window.localStorage.setItem("jv-lang", language);
    } catch {
      /* ignora */
    }
  }, [language]);

  /**
   * A troca passa por View Transition para o texto fazer cross-fade.
   * flushSync e obrigatorio: o callback precisa atualizar o DOM de forma
   * sincrona, e o React batcharia a atualizacao para depois da captura.
   * A classe vt-lang mantem o escopo separado do circulo do tema.
   */
  const setLanguage = useCallback(
    (next: Language) => {
      if (next === language) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !document.startViewTransition) {
        setLanguageState(next);
        return;
      }

      const root = document.documentElement;
      root.classList.add("vt-lang");
      const transition = document.startViewTransition(() => {
        flushSync(() => setLanguageState(next));
      });
      transition.finished.finally(() => root.classList.remove("vt-lang"));
    },
    [language],
  );

  const t = useCallback((key: MessageKey) => messages[language][key], [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage precisa estar dentro de LanguageProvider");
  return context;
}
