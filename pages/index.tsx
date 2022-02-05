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
                Hello! I'm Rafa Lynch, a web developer from Buenos Aires,
                Argentina. I have passion for well written and clean code and
                creating amazing user experiences.
              </p>
              <p>
                I consider myself a team worker, problem solver and fast learner
                with high attention to detail.
              </p>
              <p>
                I am interested in working with positive people who allow me to
                develop my skills.
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
