import { MenuIcon, XIcon, SparklesIcon, HomeIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
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
      <a href="/">
        <img src="/logo.png" alt="VeguiDev logo" className="w-12 h-12" />
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
            <div className="group relative">
              <a
                href="/sobre-mi"
                className="p-2 w-full inline-block hover:bg-white/10 rounded"
              >
                Sobre Mi
              </a>
              <section className="absolute transition-all duration-200 -translate-y-1/2 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 mt-2 -left-6 shadow-lg bg-neutral-900/70 px-4 p-2 rounded">
                <a
                  href="/sobre-mi#habilidades"
                  className="p-2 w-full inline-block hover:bg-white/10 rounded"
                >
                  Habilidades
                </a>
                <a
                  href="/sobre-mi#formacion"
                  className="p-2 w-full inline-block hover:bg-white/10 rounded"
                >
                  Formación
                </a>
              </section>
            </div>
          </li>
          <li>
            <a
              href="/contacto"
              className="p-2 w-full inline-block hover:bg-white/10 rounded"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
