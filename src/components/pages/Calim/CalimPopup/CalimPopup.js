import React from "react";

import Button from "../../../Button/Button";
import styles from "./ClaimPopup.module.css";

const ClaimPopup = ({ setPopup, currency, img }) => {
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <div className={styles.main}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Amount of {currency} to convert and stake
              </legend>
              <input type="text" className={styles.input} />
              <div className={styles.buttonImage}>
                <button className={styles.maxButton}>max</button>
                <img src={img} alt="#" className={styles.maxImage} />
              </div>
            </fieldset>

            <div className={styles.buttonContainer}>
              <div onClick={() => setPopup(false)}>
                <Button>Submit </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default ClaimPopup;
