import React, { useCallback } from "react";
import ProjectCard from "../project-card";
import { Project } from "../../types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./index.module.css";

interface Props {
  projects: Project[];
}

export default function ProjectCarousel(props: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { projects } = props;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleKey = (t: any) => {
    if (t.code === "ArrowRight") {
      scrollNext();
    }
    if (t.code === "ArrowLeft") {
      scrollPrev();
    }
  };

  return (
    <div className={styles.embla__viewport} onKeyDownCapture={handleKey}>
      <button className={styles.embla__prev} onClick={scrollPrev}>
        {"<"}
      </button>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {projects.map((project) => {
            return (
              <div key={project.title} className={styles.embla__slide}>
                <div className={styles.card_container}>
                  <ProjectCard project={project}></ProjectCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.embla__next} onClick={scrollNext}>
        {">"}
      </button>
    </div>
  );
}
