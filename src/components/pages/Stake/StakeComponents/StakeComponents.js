import React from "react";
import { useDataContext } from "../../../../context/context";

import Button from "../../../Button/Button";
import styles from "./StakeComponents.module.css";
import StakeModal from "./Modal/StakeModal";

const StakeComponents = ({
  // percentage,
  // getButton,
  stake,
  claim,
  currency,
  amount,
  amountUSD,
  button,
  dayTitle,
  day,
  usdt,

  myModal,
  modal,
  setModal,
}) => {
  const { scrollToTop } = useDataContext();
  return (
    <section className={styles.wrapper}>
      {/* <div className={styles.headingAndButton}>
        <h2 className={styles.heading}>{currency}</h2>
        <div>
          <Button background="#E7E7E7" color="#323232">
            {getButton.text}
          </Button>
        </div>
      </div>
      <div className={styles.headingAndButton}>
        <div className={styles.usdt}>
          <img src={img} alt="#" className={styles.image} />
          <p className={styles.currency}>{currency}</p>
        </div>
        <p className={styles.appromax}>
          Staking APR <span className={styles.percentage}>{percentage}</span>
        </p>
      </div> */}
      <div className={styles.stakeComponents}>
        <h2 className={styles.title}>
          {!stake && !claim && "Unstake"}
          {claim && "Claim"}{" "}
          <span className={styles.stakeCurrency}>{currency}</span>
        </h2>
        <div className={styles.amountContainer}>
          <p className={styles.amount}>{amount}</p>
          <p className={styles.amountText}>${amountUSD}</p>
        </div>
        <div
          onClick={() => {
            setModal(true);
            scrollToTop();
          }}
        >
          <Button width="100%">{button.text}</Button>
        </div>
        <div className={styles.countDown}>
          <p className={styles.countDownText}>{dayTitle}</p>
          <p className={styles.time}>
            {day && `${day} days`} {usdt && `${usdt} USDT`}
          </p>
        </div>
      </div>{" "}
      {modal && myModal}
    </section>
  );
};

export default StakeComponents;
