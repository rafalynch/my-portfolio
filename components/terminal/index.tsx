import { JetBrains_Mono } from "next/font/google";
import styles from "./index.module.css";
import { profile } from "./content";
import Intro from "./Intro";
import Shell from "./Shell";
import { useBuenosAiresTime } from "./useBuenosAiresTime";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export default function Terminal() {
  const time = useBuenosAiresTime();
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.page} ${mono.variable}`}>
      <header className={styles.nav}>
        <span className={styles.logo}>~/rafa-lynch</span>
        <span className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          BA {time ?? "--:--"}
        </span>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.comment}>
            {"// "}
            {profile.title.toLowerCase()} — {profile.location}
          </p>
          <h1 className={styles.name}>
            {profile.name}
            <span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.tagline}>
            <Intro linkClassName={styles.company} />
          </p>
        </section>

        <Shell />
      </main>

      <footer className={styles.footer}>
        © {year} {profile.name}
      </footer>
    </div>
  );
}
