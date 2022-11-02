import React, { useState } from "react";
import Button from "../../../Button/Button";
import MakeOfferPopup from "../MakeOfferPopup/MakeOfferPopup";
import styles from "./MarketPlaceComponents.module.css";

const MarketPlaceComponents = ({ data }) => {
  const [popup, setPopup] = useState(false);
  return (
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
      <div className={styles.buttonContainer} onClick={() => setPopup(true)}>
        <Button>{data.button.text}</Button>
      </div>
      {popup && <MakeOfferPopup setPopup={setPopup} />}
    </div>
  );
};
export default MarketPlaceComponents;
