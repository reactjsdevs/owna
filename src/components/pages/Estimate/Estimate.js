import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useDataContext } from "../../../context/context";
import styles from "./Estimate.module.css";
import { useNavigate } from "react-router-dom";
import EstimateModal from "./EstimateModal/EstimateModal";

const Estimate = () => {
  const [estimationCompleted, setEstimationCompleted] = useState();
  const { estimateAmount, setEstimateAmount } = useDataContext();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setEstimateAmount(4563);
    }, 3000);
  }, []);
  return (
    <section className={`${styles.wrapper} wrapper`}>
      {!estimationCompleted && (
        <>
          {estimateAmount ? (
            <>
              <h1 className={`title ${styles.title}`}>Hello there!</h1>
              <p className={`text ${styles.text}`}>
                {" "}
                “Congratulations! You have received your estimation.”
              </p>
              <p className={`text ${styles.text}`}>
                Owna is willing to lend you up to:{" "}
                <span className="title">{estimateAmount} Dollars!</span>
              </p>
              <div className={styles.buttonContainer}>
                <div onClick={() => navigate("/appoinment")}>
                  <Button color="#323232" background="#E7E7E7">
                    I want it Back
                  </Button>
                </div>

                <div onClick={() => setEstimationCompleted(true)}>
                  <Button>Let’s Go!</Button>{" "}
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className={`title ${styles.title}`}>Hello there!</h1>
              <p className={`text ${styles.text}`}>
                “You have not received any estimation{" "}
                <br className={styles.br} /> for your asset yet. We will come to
                you shortly ”
              </p>
            </>
          )}
        </>
      )}
      {estimationCompleted && (
        <EstimateModal setPopup={setEstimationCompleted} />
      )}
    </section>
  );
};

export default Estimate;
