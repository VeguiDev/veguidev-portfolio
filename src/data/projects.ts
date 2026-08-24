import type { TFunction } from "i18next";
import type enTranslations from "../../public/locales/en/translation.json";
import type esTranslations from "../../public/locales/es/translation.json";

export interface Proyect {
  id: string;
  image: string;
  link?: string;
  link_localized?: boolean;
  pills: { text: string; color: string }[];
}

export interface TranslatedProyect {
  id: string;
  image: string;
  title: string;
  description: string;
  link?: string;
  pills: { text: string; color: string }[];
}

export const projects = [
  {
    id: "vcontext",
    image: "/proyectos-images/vcontext.png",
    link: "https://vcontext.dev/",
    pills: [
      { text: "React", color: "blue" },
      { text: "Tailwind", color: "red" },
      { text: "Next.js", color: "purple" },
      { text: "Hono.js", color: "orange" },
      { text: "Honest", color: "orange" },
    ],
  },
  {
    id: "masivo",
    image: "/proyectos-images/masivo.png",
    link: "https://masivo.gg/",
    pills: [
      { text: "React", color: "blue" },
      { text: "Tailwind", color: "red" },
      { text: "Next.js", color: "purple" },
      { text: "Nest.js", color: "orange" },
      { text: "Supabase", color: "green" },
      { text: "DevOps", color: "cyan" },
    ],
  },
  {
    id: "san-pedro",
    image: "/proyectos-images/san-pedro.png",
    link: "https://institutosanpedro.edu.ar/",
    pills: [
      { text: "React", color: "blue" },
      { text: "Tailwind", color: "red" },
      { text: "Astro.js", color: "orange" },
    ],
  },
  {
    id: "legado-social",
    image: "/proyectos-images/legado-social.png",
    link: "https://legadosocial.vercel.app/",
    pills: [
      { text: "React", color: "blue" },
      { text: "Tailwind", color: "red" },
    ],
  },
  {
    id: "farfania-cloth",
    image: "/proyectos-images/cloth.png",
    pills: [
      { text: "React", color: "blue" },
      { text: "Tailwind", color: "red" },
      { text: "Electron.js", color: "green" },
      { text: "Java", color: "cyan" },
    ],
  },
  {
    id: "farfania-landing",
    image: "/proyectos-images/farfania-landing.png",
    link: "https://farfania.com/",
    pills: [
      { text: "Astro.js", color: "orange" },
      { text: "Tailwind", color: "red" },
      { text: "React", color: "blue" },
      { text: "Nest.js", color: "yellow" },
    ],
  },
  {
    id: "farfadox-launcher",
    image: "/proyectos-images/farfadox-launcher.png",
    link: "https://farfania.com/launcher",
    pills: [
      { text: "React", color: "blue" },
      { text: "Tailwind", color: "red" },
      { text: "Electron.js", color: "orange" },
      { text: "Nest.js", color: "yellow" },
    ],
  },
  {
    id: "economy-suite",
    image: "/proyectos-images/economy-suite.png",
    pills: [
      { text: "Java", color: "cyan" },
      { text: "SQL", color: "blue" },
    ],
  },
  {
    id: "contacts-app",
    image: "/proyectos-images/eyemod-farfania.png",
    pills: [
      { text: "Java", color: "cyan" },
      { text: "SQL", color: "blue" },
    ],
  },
  {
    id: "wetalk",
    image: "/proyectos-images/wetalk.png",
    pills: [
      { text: "Java", color: "cyan" },
      { text: "SQL", color: "blue" },
    ],
  },
] as const satisfies readonly Proyect[];

type ProjectId = (typeof projects)[number]["id"];
type LocalizedProjectId = Extract<
  (typeof projects)[number],
  { link_localized: true }
>["id"];
type ProjectTranslation<Id extends ProjectId> = {
  name: string;
  description: string;
} & (Id extends LocalizedProjectId ? { localized_link: string } : object);
type ProjectTranslations = {
  [Id in ProjectId]: ProjectTranslation<Id>;
};
type Assert<T extends true> = T;
type _SpanishProjectTranslationsAreComplete = Assert<
  typeof esTranslations.project.meta extends ProjectTranslations ? true : false
>;
type _EnglishProjectTranslationsAreComplete = Assert<
  typeof enTranslations.project.meta extends ProjectTranslations ? true : false
>;

function requiredTranslation(t: TFunction, key: string): string {
  const value = t(key);
  if (value === key) throw new Error(`Missing required translation: ${key}`);
  return value;
}

export function translateProjects(t: TFunction): TranslatedProyect[] {
  return projects.map((project) => {
    const definition: Proyect = project;
    const translationKey = `project.meta.${project.id}`;
    const link =
      definition.link && definition.link_localized
        ? requiredTranslation(t, `${translationKey}.localized_link`)
        : definition.link;

    return {
      id: project.id,
      image: project.image,
      title: requiredTranslation(t, `${translationKey}.name`),
      description: requiredTranslation(t, `${translationKey}.description`),
      link,
      pills: project.pills.map((pill) => ({ ...pill })),
    };
  });
}
