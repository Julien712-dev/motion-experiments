export type MenuItem = {
  title: string;
  href: string;
};

export type Config = {
  mainNav: MenuItem[];
};

export const config: Config = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Modal",
      href: "/modal",
    },
    {
      title: "SVG Path",
      href: "/svg-path",
    },
  ],
};