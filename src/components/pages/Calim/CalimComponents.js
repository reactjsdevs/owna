import React from "react";
import { useState } from "react";

import Button from "../../Button/Button";
import styles from "./Calim.module.css";
import ClaimPopup from "./CalimPopup/CalimPopup";

const CalimComponents = ({ currency, amount, amountUSD, button, day, img }) => {
  const [popup, setPopup] = useState(false);
  return (
    <section className={styles.wrapper}>
      <div className={styles.claimComponents}>
        <img src={img} alt="#" className={styles.image} />
        <h2 className={styles.title}>
          Claim <span className={styles.claimCurrency}>{currency}</span>
        </h2>
        <div className={styles.amountContainer}>
          <p className={styles.amount}>{amount}</p>
          <p className={styles.amountText}>${amountUSD}</p>
        </div>
        <div className={styles.buttonContainer} onClick={() => setPopup(true)}>
          <Button width="100%">{button.text}</Button>
        </div>
        <div className={styles.countDown}>
          <p className={styles.countDownText}>Cooldown period</p>
          <p className={styles.time}>{day} d</p>
        </div>
      </div>
      {popup && (
        <ClaimPopup setPopup={setPopup} currency={currency} img={img} />
      )}
    </section>
  );
};

export default CalimComponents;
