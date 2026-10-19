export interface ContactLink {
  label: string;
  handle: string;
  href: string;
  external: boolean;
}

export const site = {
  url: "https://www.rafalynch.com",
  title: "Rafa Lynch — Software engineer",
  description:
    "Software engineer on the VidCruiter team, building and shipping the core product and bringing AI into it. Based in Buenos Aires.",
};

export const profile = {
  name: "Rafa Lynch",
  firstName: "Rafa",
  lastName: "Lynch",
  title: "Software engineer",
  location: "Buenos Aires",
  company: { name: "VidCruiter", url: "https://vidcruiter.com" },
  links: [
    {
      label: "GitHub",
      handle: "/rafalynch",
      href: "https://github.com/rafalynch",
      external: true,
    },
    {
      label: "LinkedIn",
      handle: "/rafaellynch",
      href: "https://linkedin.com/in/rafaellynch",
      external: true,
    },
    {
      label: "Email",
      handle: "rafalynch.dev@gmail.com",
      href: "mailto:rafalynch.dev@gmail.com",
      external: false,
    },
  ] as ContactLink[],
};

export function linkProps(link: ContactLink) {
  return link.external
    ? { href: link.href, target: "_blank", rel: "noreferrer" }
    : { href: link.href };
}
