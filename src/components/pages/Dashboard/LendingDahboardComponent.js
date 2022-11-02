import React from "react";
import Button from "../../Button/Button";
import borrower from "../../../images/borrower.png";
import styles from "./LendingDashboard.module.css";

const LendingDashboard = () => {
  const data = [
    { title: "Lender", text: "1e8e82 ", img: borrower },
    { title: "Received", text: "10 Aug 11:08" },

    { title: "Remaining days", text: "10 Aug 11:08" },

    { title: "Daily interest", text: "8 Flexible" },

    {
      title: "Cumulated interests ",
      text: "25 000 USDT ",
    },
    {
      title: "Outstanding loan",
      text: "25 000 USDT ",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.dataWrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.textContainer} ${
              index % 2 === 0 && styles.textContainerBorder
            }`}
          >
            <div>
              <div className={styles.titleAndIcon}>
                {item.img && (
                  <img src={item.img} alt="#" className={styles.icon} />
                )}
                <div>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* <div className={styles.buttonContainer}>
        <Button background="#E7E7E7" color="#323232">
          Sell item
        </Button>{" "}
        <Button>Refund</Button>
      </div> */}
    </div>
  );
};
export default LendingDashboard;
