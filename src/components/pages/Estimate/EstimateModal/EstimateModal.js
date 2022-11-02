import React from "react";
import Button from "../../../Button/Button";
import styles from "./EstimateModal.module.css";
const EstimateModal = ({ setPopup }) => {
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <h1 className={`title ${styles.title}`}>“Congratulations!”</h1>

          <div className={styles.textContainer}>
            <p className={`text ${styles.text}`}>Now, what’s next?</p>
            <p className={`text ${styles.text}`}>
              Check your email to sign any remaining documents.
            </p>
            <p className={`text ${styles.text}`}>
              {" "}
              This will allow you to receive P2P loan offers
              <br className={styles.br} /> and borrow stablecoins.
            </p>
          </div>
          <div onClick={() => setPopup(false)}>
            <Button>OK</Button>
          </div>
        </div>
      </section>

      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default EstimateModal;
