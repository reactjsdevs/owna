import React from "react";
import Button from "../../Button/Button";
import styles from "./WhatAreYouWillingTodo.module.css";

const WhatAreYouWillingTodo = () => {
  return (
    <section className={` ${styles.willingTodo}`}>
      <h1 className={`title ${styles.title}`}>
        Hi there! What are you willing to do ?
      </h1>
      <div className={styles.buttonContainer}>
        <Button color="#323232" background="#E7E7E7" to="/connect">
          Get asset back
        </Button>{" "}
        <Button to="/appoinment">Bring asset</Button>
      </div>
    </section>
  );
};

export default WhatAreYouWillingTodo;
