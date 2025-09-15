import {
  MenuIcon,
  XIcon,
  SparklesIcon,
  HomeIcon,
  ArrowDownIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import LenguajeSwitch from "./LanguajeSwitch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { getAbsoluteLocaleUrl } from "astro:i18n";

export default function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` p-6 z-50 sticky top-0 left-0 flex items-center ${
        onTop
          ? "bg-transparent"
          : "bg-neutral-900 md:bg-neutral-900/70 md:backdrop-blur"
      }`}
    >
      <a href={getAbsoluteLocaleUrl(i18next.language, "/")}>
        <img src="/logo.webp" alt="VeguiDev logo" className="w-12 h-12" />
      </a>
      <button onClick={() => setIsOpen(!isOpen)} className="ml-auto md:hidden">
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <nav
        className={`fixed top-0 left-0 h-screen w-full bg-neutral-900 p-6 md:p-0 md:ml-10 transform md:bg-transparent transition-transform duration-300 flex flex-col md:relative md:w-full md:h-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <section className="flex p-2 font-medium text-xl items-center select-none mb-5 md:hidden">
          MENU
          <button onClick={() => setIsOpen(false)} className="ml-auto">
            <XIcon />
          </button>
        </section>
        <ul className="w-full h-full justify-center flex flex-col gap-2 md:h-auto md:flex-row">
          <li>
            <a
              href={t("homeHref") || "/"}
              className="p-2 w-full inline-flex gap-3 hover:bg-white/10 rounded"
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href={t("projectsHref") || "/proyectos"}
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <div className="group relative">
              <a
                href={t("aboutMeHref") || "/sobre-mi"}
                className="p-2 w-full inline-block hover:bg-white/10 rounded"
              >
                {t("aboutMe")}
              </a>
              <section className="absolute transition-all duration-200 md:-translate-y-1/2 md:scale-0 md:opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 mt-2 md:-left-6 md:shadow-lg md:bg-neutral-900/70 px-4 p-2 rounded max-md:relative">
                <a
                  href={t("skillsHref") || "/sobre-mi#skills"}
                  className="p-2 w-full inline-block hover:bg-white/10 rounded"
                >
                  {t("skills")}
                </a>
                <a
                  href={t("educationHref") || "/sobre-mi#education"}
                  className="p-2 w-full inline-block hover:bg-white/10 rounded"
                >
                  {t("education")}
                </a>
              </section>
            </div>
          </li>
          <li>
            <a
              href={t("contactHref") || "/contacto"}
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              {t("contact")}
            </a>
          </li>
          <li>
            <a
              href={t("cvLink") || "/CV - Juan Manuel Menta.pdf"}
              className="p-2 flex gap-3 w-full hover:bg-white/10 rounded"
              target="_blank"
            >
              CV <ArrowDownIcon />
            </a>
          </li>
          <li className="ml-auto">
            <LenguajeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
