import { profile } from "./content";

interface Props {
  linkClassName?: string;
}

export default function Intro({ linkClassName }: Props) {
  return (
    <>
      {profile.title} on the{" "}
      <a
        className={linkClassName}
        href={profile.company.url}
        target="_blank"
        rel="noreferrer"
      >
        {profile.company.name}
      </a>{" "}
      team, building and shipping the core product and bringing AI into it.
    </>
  );
}
