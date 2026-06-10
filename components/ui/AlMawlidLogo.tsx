import React from "react";

interface AlMawlidLogoProps {
  size?: number;
  variant?: "full" | "icon";
  className?: string;
}

export function AlMawlidLogo({ size = 40, variant = "icon", className }: AlMawlidLogoProps) {
  if (variant === "full") {
    return (
      <div className={`flex items-center gap-3 ${className ?? ""}`}>
        <AlMawlidLogoIcon size={size} />
        <div className="flex flex-col leading-tight">
          <span
            className="font-bold text-brand-brown"
            style={{
              fontFamily: "'Noto Kufi Arabic', 'Tahoma', Arial, sans-serif",
              fontSize: size * 0.38,
              letterSpacing: "0.03em",
            }}
          >
            تعاونية المولد
          </span>
          <span
            className="text-brand-gold-deep tracking-widest uppercase"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: size * 0.2,
              letterSpacing: "0.15em",
            }}
          >
            ALMAWLID
          </span>
        </div>
      </div>
    );
  }

  return <AlMawlidLogoIcon size={size} className={className} />;
}

function AlMawlidLogoIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Al Mawlid Cooperative Logo"
    >
      {/* Dark circle background */}
      <circle cx="50" cy="50" r="49" fill="#13100A" />

      {/* Left ornamental arcs — white */}
      <path d="M 37 45 C 31 38, 31 27, 37 20" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 34 48 C 25 39, 25 24, 34 15" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* Right ornamental arcs */}
      <path d="M 63 45 C 69 38, 69 27, 63 20" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 66 48 C 75 39, 75 24, 66 15" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* Left small oil drop */}
      <path d="M 36 17 C 39.5 24, 42 28, 42 33 A 6 6 0 0 1 30 33 C 30 28, 32.5 24, 36 17 Z" fill="#D49018" />

      {/* Central large oil drop */}
      <path d="M 50 7 C 54.5 17, 58 23, 58 31.5 A 8 8 0 0 1 42 31.5 C 42 23, 45.5 17, 50 7 Z" fill="#E8A020" />

      {/* Right small oil drop */}
      <path d="M 64 17 C 67.5 24, 70 28, 70 33 A 6 6 0 0 1 58 33 C 58 28, 60.5 24, 64 17 Z" fill="#D49018" />

      {/* Main branch */}
      <path d="M 22 61 C 36 53, 64 53, 78 61" stroke="#82B820" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Leaves */}
      <path d="M 31 61 C 24 52, 28 44, 36 56 Z" fill="#82B820" />
      <path d="M 69 61 C 76 52, 72 44, 64 56 Z" fill="#82B820" />
      <path d="M 43 57 C 38 49, 43 44, 47 55 Z" fill="#82B820" />
      <path d="M 57 57 C 62 49, 57 44, 53 55 Z" fill="#82B820" />

      {/* Argan fruits */}
      <circle cx="31" cy="64" r="2.8" fill="#E88030" />
      <circle cx="44" cy="60" r="2.8" fill="#E88030" />
      <circle cx="56" cy="60" r="2.8" fill="#E88030" />
      <circle cx="69" cy="64" r="2.8" fill="#E88030" />

      {/* ALMAWLID text */}
      <text
        x="50"
        y="79"
        textAnchor="middle"
        fill="white"
        fontSize="9.5"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        letterSpacing="1.3"
      >
        ALMAWLID
      </text>

      {/* Coopérative subtitle */}
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fill="#A89870"
        fontSize="5.5"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.4"
      >
        Coopérative
      </text>
    </svg>
  );
}

export default AlMawlidLogo;
