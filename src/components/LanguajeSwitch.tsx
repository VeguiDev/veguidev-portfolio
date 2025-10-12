import Flag from "./Flag";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { localizePath, getCurrentLocale } from "@veguidev/astro-i18next";

export default function LenguajeSwitch() {
  const [open, setopen] = useState(false);
  const i18n = i18next;
  const locale = i18n.language || getCurrentLocale();

  const changeLanguage = (lng: string) => {
    if (!lng || lng === i18n.language) return;
    const next = localizePath(window.location.pathname, lng);

    window.location.href = next;
  };

  return (
    <section className="relative">
      <section
        onClick={() => {
          setopen(!open);
        }}
        className="flex select-none gap-2 p-2 hover:bg-white/20 rounded transition-colors duration-200 items-center cursor-pointer"
      >
        <Flag locale={locale} />
        <ChevronDownIcon
          className={`transition-all duration-150 ${
            open ? "transform rotate-180" : "rotate-0"
          }`}
        />
      </section>

      <section
        className={`absolute bg-neutral-900 w-full transition-all -bottom-1 duration-200 rounded ${
          open
            ? "opacity-1 scale-100 translate-y-12"
            : "translate-y-0 scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {(i18n.languages || ["es", "en"])
          .filter((ln) => ln != locale)
          .map((lng) => (
            <section
              key={lng}
              className="flex gap-2 justify-center select-none p-2 hover:bg-white/20 rounded transition-colors duration-200 items-center cursor-pointer"
              onClick={() => changeLanguage(lng)}
            >
              <Flag locale={lng} />
            </section>
          ))}
      </section>
    </section>
  );
}
