import React from "react";
import { useState } from "react";
import Button from "../../Button/Button";
import RefundPopup from "./RefundPopup/RefundPopup";
import SellItemModal from "./SellItemModal/SellItemModal";
import styles from "./Dashboard.module.css";
import LendingDashboard from "./LendingDahboardComponent";
import Heading from "../../Heading/Heading";

const Dashboard = () => {
  const [refundpopup, setRefundPopup] = useState(false);
  const [sellitpopup, setSellitPopup] = useState(false);
  return (
    <>
      <section className={` ${styles.dashboard}`}>
        <div className={styles.dashboard2}>
          {" "}
          <Heading title="Dashboard" noPadding />
        </div>
        {/* <h2 className={`title ${styles.title}`}>Dashboard</h2> */}
        <p className={`text ${styles.text}`}>
          Your outstanding loan is{" "}
          <span className={styles.amount}> 5446 USDT</span>
        </p>
        <div className={styles.interest}>
          <div className={`${styles.dailyInteres} ${styles.borderRight}`}>
            <h3 className="title">Daily interest</h3>
            <p className={styles.interestAmount}>0.39 USDT</p>
          </div>
          <div className={`${styles.dailyInteres} `}>
            <h3 className="title">Cumulated interests</h3>
            <p className={styles.interestAmount}>0.39 USDT</p>
          </div>
        </div>{" "}
        <div className={styles.buttonContainer}>
          <div onClick={() => setSellitPopup(true)}>
            <Button background="#E7E7E7" color="#323232">
              Sell item
            </Button>
          </div>
          <div onClick={() => setRefundPopup(true)}>
            <Button>Refund</Button>
          </div>
        </div>
        {refundpopup && <RefundPopup setPopup={setRefundPopup} />}{" "}
        {sellitpopup && <SellItemModal setPopup={setSellitPopup} />}
        <div className={`${styles.dashboard2} `}>
          <h2 className={`title ${styles.title}`}>Lending Dashboard</h2>
          <LendingDashboard />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
