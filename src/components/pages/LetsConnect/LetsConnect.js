import React from "react";

import { InlineWidget } from "react-calendly";

import Button from "../../Button/Button";

import styles from "./LetsConnect.module.css";

const LetsConnect = () => {
  return (
    <section className={` ${styles.letsConnectWrapper}`}>
      <h1 className="title">Let’s Connect</h1>
      <p className="text">Book below if you need assitance</p>
      <div className={styles.letsConnect}>
        <InlineWidget url="https://calendly.com/ownafinance/30min" />
      </div>
    </section>
  );
};

export default LetsConnect;
