import { MenuIcon, XIcon, SparklesIcon, HomeIcon } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 md:bg-neutral-900/70 md:backdrop-blur p-6 z-50 sticky top-0 left-0 flex items-center">
      VEGUIDEV
      <button onClick={() => setIsOpen(!isOpen)} className="ml-auto md:hidden">
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-neutral-900 p-6 md:p-0 md:ml-12 transform md:bg-transparent transition-transform duration-300 flex flex-col md:relative md:w-full md:h-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <section className="flex p-2 font-medium text-xl items-center select-none mb-5 md:hidden">
          MENU
          <button onClick={() => setIsOpen(false)} className="ml-auto">
            <XIcon />
          </button>
        </section>
        <ul className="w-full h-full flex flex-col gap-2 md:h-auto md:flex-row">
          <li>
            <a
              href="/"
              className="p-2 w-full inline-flex gap-3 hover:bg-white/10 rounded"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/proyectos"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/sobre-mi#habilidades"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="/sobre-mi"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Sobre Mi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
