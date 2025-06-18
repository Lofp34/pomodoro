"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Accueil", target: "top" },
  { label: "Offre", target: "offre" },
  { label: "Diagnostic", target: "diagnostic" },
  { label: "Cas clients", target: "cas-clients" },
  { label: "Contact", target: "contact" },
];

function scrollToSection(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-700
        ${scrolled
          ? "fixed bg-blue-ink/70 backdrop-blur-lg border-b border-blue-ink/30 shadow-lg opacity-100 translate-y-0"
          : "absolute bg-transparent border-none shadow-none opacity-100 translate-y-0"}
      `}
      style={{ WebkitBackdropFilter: scrolled ? "blur(16px)" : undefined }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-title font-bold text-lg md:text-xl text-primary-bg tracking-tight select-none drop-shadow-sm">
          Laurent Serre Développement
        </span>
        <ul className="flex gap-2 sm:gap-4 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.target}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.target)}
                className="px-3 py-2 text-primary-bg/90 hover:text-mint-green hover:bg-mint-green/10"
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 