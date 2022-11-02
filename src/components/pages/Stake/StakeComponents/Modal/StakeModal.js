import React from "react";

import Button from "../../../../Button/Button";
import styles from "./StakeModal.module.css";

const StakeModal = ({ setPopup, img }) => {
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <div className={styles.main}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Amount of USDT to convert and stake
              </legend>
              <input type="text" className={styles.input} />
              <div className={styles.buttonImage}>
                <button className={styles.maxButton}>max</button>
                <img src={img} alt="#" className={styles.maxImage} />
              </div>
            </fieldset>
            <div className={styles.circleAndLine}>
              <span className={styles.circle}></span>
              <span className={styles.line}></span>
              <span className={styles.circle}></span>
            </div>
            <div className={styles.myButtons}>
              <div onClick={() => setPopup(false)}>
                <Button background="#E7E7E7" color="#323232">
                  Approve
                </Button>
              </div>
              <div onClick={() => setPopup(false)}>
                {" "}
                <Button>Convert & Stake</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default StakeModal;
