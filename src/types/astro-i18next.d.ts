declare module "@veguidev/astro-i18next" {
  export const AstroI18next: {
    config: {
      locales?: string[];
      defaultLocale?: string;
    };
  };

  export function getCurrentLocale(): string;
  export function localizePath(
    path?: string,
    locale?: string | null,
    base?: string,
  ): string;
  export function localizeUrl(
    url: string,
    locale?: string | null,
    base?: string,
  ): string;
}
