import React from "react";
import { useState } from "react";
import Button from "../../../Button/Button";
import Popup from "../BorrowPopUp/BorrowPopup";
import styles from "./P2pComponents.module.css";
const P2pComponents = ({ data }) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.dataWrapper}>
          {data.info.map((item, index) => (
            <div
              key={index}
              className={`${styles.textContainer} ${
                index % 2 === 0 && styles.textContainerBorder
              }`}
            >
              <div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>{" "}
        <div className={styles.buttonContainer} onClick={() => setPopup(true)}>
          <Button>Borrow</Button>
        </div>
      </div>
      {popup && <Popup setPopup={setPopup} />}
    </>
  );
};

export default P2pComponents;
