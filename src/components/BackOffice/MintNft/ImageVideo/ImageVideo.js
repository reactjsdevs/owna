import React from "react";

import imageLogo from "../../../../images/imageLogo.svg";
import styles from "./ImageVideo.module.css";

const ImageVideo = ({ title }) => {
  return (
    <section className={`${styles.uploadingPhoto}`}>
      <div className={styles.headingAndPhoto}>
        <h3 className={styles.heading}>Image, Video</h3>
        {/* <div className={styles.photoContainer}>
          <img src={imageLogo} alt="#" className={styles.imageLogo} />
        </div> */}
        <label htmlFor="id" className={styles.button}>
          Upload
          <input type="file" id="id" className={styles.input} />
        </label>
      </div>
    </section>
  );
};

export default ImageVideo;
