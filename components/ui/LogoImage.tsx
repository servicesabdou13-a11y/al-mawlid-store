"use client";

import { useState } from "react";
import Image from "next/image";
import { AlMawlidLogo } from "./AlMawlidLogo";

interface LogoImageProps {
  size?: number;
  className?: string;
}

export function LogoImage({ size = 44, className }: LogoImageProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return <AlMawlidLogo size={size} className={className} />;
  }

  return (
    <Image
      src="/images/logo.png"
      alt="تعاونية المولد - Coopérative Al Mawlid"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
      onError={() => setUseFallback(true)}
      priority
    />
  );
}
