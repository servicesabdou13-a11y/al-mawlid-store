"use client";

import React, { useEffect } from "react";
import { useLanguageStore } from "@/lib/store/languageStore";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguageStore();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return <>{children}</>;
}
