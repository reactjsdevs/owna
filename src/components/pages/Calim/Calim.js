import React from "react";
import CalimComponents from "./CalimComponents";
import usdtIcon from "../../../images/usdt.svg";
import onaIcon from "../../../images/ona.svg";
import styles from "./Calim.module.css";
import Heading from "../../Heading/Heading";

const Claim = () => {
  const data = [
    {
      img: usdtIcon,
      currency: "USDT",
      amount: 0,
      amountUSD: 0,
      button: { text: " Unstake USDT" },
      day: 10,
    },
    {
      img: onaIcon,
      currency: "ONA",
      amount: 0,
      amountUSD: 0,
      button: { text: " Claim ONA" },
      day: 10,
    },
  ];
  return (
    <>
      <section className={styles.claim}>
        {" "}
        <Heading
          title="Claim"
          text="Unstake your liquidity and claim your rewards"
        />
        <div className={styles.componentswrapper}>
          {data.map((el, i) => (
            <CalimComponents {...el} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Claim;
