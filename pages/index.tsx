import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../components/logo";
import Title from "../components/title";
import LongText from "../components/long-text";
import ProfilePic from "../components/profile-pic";
import ProjectLayout from "../components/project-layout";
import styles from "../styles/Home.module.css";
import ContactBody from "../components/contact-body";
import LogoFooter from "../components/logo-footer";
import MyCv from "../components/my-cv";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rafa Lynch</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main>
        <header className={styles.header}>
          <Logo />
        </header>
        <section className={styles.about_me}>
          <Title>About me</Title>
          <div className={styles.about_me__body}>
            <ProfilePic></ProfilePic>
            <LongText>
              <p>
                Hello! I&apos;m Rafa Lynch, a web developer from Buenos Aires,
                Argentina. I have a passion for clean and well written code and
                for creating amazing user experiences.
              </p>
              <p>
                I consider myself a team worker, a problem solver and a fast
                learner with high attention to detail.
              </p>
              <p>
                I am interested in working with positive people who can
                contribute to the improvement of my skills.
              </p>
            </LongText>
          </div>
          <MyCv></MyCv>
        </section>
        <section className={styles.portfolio}>
          <div className={styles.portfolio__title}>
            <Title>Portfolio</Title>
          </div>
          <ProjectLayout></ProjectLayout>
        </section>
        <section className={styles.contact}>
          <Title>Contact</Title>
          <ContactBody></ContactBody>
        </section>
      </main>
      <footer className={styles.footer}>
        <LogoFooter />
      </footer>
    </div>
  );
};

export default Home;
