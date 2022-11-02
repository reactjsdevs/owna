import React, { useState } from "react";
import MyRange from "../../../Range/Range";
import Button from "../../../Button/Button";
import styles from "./Popup.module.css";

const Popup = ({ setPopup }) => {
  const [borrowAmount, setBorrowAmount] = useState([5000]);
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <h2 className={styles.title}>Selected</h2>
          <p className={styles.tagline}>19 000 USDT</p>
          <div className={styles.range}>
            <div className={styles.minMax}>
              <p className={styles.amount}>
                5000 <span className={styles.text}>min</span>
              </p>{" "}
              <p className={styles.amount}>
                {borrowAmount} <span className={styles.text}>max</span>
              </p>
            </div>
            <MyRange value={borrowAmount} setValue={setBorrowAmount} />
          </div>
          <h2 className={styles.title}>Daily interest: 7,29 USDT</h2>
          <div
            className={styles.buttonContainer}
            onClick={() => setPopup(false)}
          >
            <Button>Borrow</Button>
          </div>
        </div>
      </section>

      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default Popup;
