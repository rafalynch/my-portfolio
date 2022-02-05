import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";

export default function ProfilePic() {
  return (
    <div className={styles.image_container}>
      <Image
        layout="responsive"
        width={200}
        height={200}
        className={styles.image}
        src={profilePic}
        alt="rafa-lynch"
      />
    </div>
  );
}
