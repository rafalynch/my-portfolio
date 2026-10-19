import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";

export default function ProfilePic() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      className={styles.image_container}
    >
      <Image
        width={200}
        height={200}
        style={{ width: "100%", height: "auto" }}
        className={styles.image}
        src={profilePic}
        alt="rafa-lynch"
      />
    </div>
  );
}
