import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 p-6 z-50 sticky top-0 left-0 flex items-center">
      VEGUIDEV
      <button onClick={() => setIsOpen(!isOpen)} className="ml-auto">
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-neutral-900 p-6 transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="ml-auto">
          <XIcon />
        </button>
        <ul className="w-full h-full flex flex-col gap-2">
          <li>
            <a
              href="/"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="/"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Habilidades
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
