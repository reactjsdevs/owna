import React from "react";

import imageLogo from "../../../../images/imageLogo.svg";
import styles from "./UploadingPhoto.module.css";
import { useState } from "react";

const UploadingPhoto = ({ title }) => {
  const [photo, setPhoto] = useState("");

  const photoData = [
    { title: "Photo 1: Facing", img: "" },
    { title: "Photo 2: Back", img: "" },

    { title: "Photo 3: Left: Facing", img: "" },

    { title: "Photo 4: Right: Facing", img: "" },
    { title: "Photo 5: Top ", img: "" },
    { title: "Photo 6: Down", img: "" },
  ];
  const uploadPhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <section className={`wrapper ${styles.uploadingPhoto}`}>
      <h1 className="title">PHOTOS</h1>
      {photoData.map((el, i) => (
        <div key={i} className={styles.headingAndPhoto}>
          <h3 className={styles.heading}>{el.title}</h3>
          {/* <div className={styles.photoContainer}>
            <label htmlFor="photo">
              <img src={imageLogo} alt="#" className={styles.imageLogo} />
            </label>

            <input
              id="photo"
              type="file"
              onChange={uploadPhoto}
              className={styles.inputFile}
            />
          </div> */}
          <label htmlFor="id" className={styles.button}>
            Upload
            <input type="file" id="id" className={styles.input} />
          </label>
        </div>
      ))}
    </section>
  );
};

export default UploadingPhoto;
