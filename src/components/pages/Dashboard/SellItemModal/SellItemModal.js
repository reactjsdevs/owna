import React from "react";
import Button from "../../../Button/Button";
import styles from "./Popup.module.css";
const SellItemModal = ({ setPopup }) => {
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <h2 className={styles.title}>Confirmation</h2>
          <p className={styles.tagline} style={{ margin: "15px 0" }}>
            "By clicking on confirm, you agree to authorize Owna to sell your
            item to pay off your debt. A 10% commission will be charged on the
            sale"
          </p>
          <div className={styles.buttonContainer}>
            <div onClick={() => setPopup(false)}>
              <Button background="#E7E7E7" color="#323232">
                Cancel
              </Button>
            </div>
            <div onClick={() => setPopup(false)}>
              <Button>Confirm</Button>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default SellItemModal;
