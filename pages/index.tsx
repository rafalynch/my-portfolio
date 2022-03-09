import Logo from "../components/logo";
import Title from "../components/title";
import LongText from "../components/long-text";
import ProfilePic from "../components/profile-pic";
import ProjectLayout from "../components/project-layout";
import styles from "../styles/Home.module.css";
import ContactBody from "../components/contact-body";
import LogoFooter from "../components/logo-footer";
import MyCv from "../components/my-cv";
import { getAllEntries } from "../services/api";
import * as contentful from "contentful";
import { Project } from "../types";

interface HomeProps {
  entries: contentful.EntryCollection<unknown>;
}

function Home({ entries }: HomeProps) {
  const projects: Project[] = entries.items.map((item: any) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description.content[0].content[0].value,
      image: "https:" + item.fields.image.fields.file.url,
      demoLink: item.fields.demoLink,
      repoLink: item.fields.repoLink,
    };
  });

  return (
    <div>
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
          <ProjectLayout projects={projects}></ProjectLayout>
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
}

export async function getServerSideProps() {
  const entries = await getAllEntries();

  return {
    props: { entries },
  };
}

export default Home;
