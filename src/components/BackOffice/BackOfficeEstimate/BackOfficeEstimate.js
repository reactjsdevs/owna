import React, { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import styles from "./BackOfficeEstimate.module.css";

const BackOfficeEstimate = () => {
  const [values, setValues] = useState({
    walletaddress: "",
    amount: "",
    text: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const inputs = [
    {
      label: "Wallet Address",
      type: "text",
      name: "walletAddress",
      placeholder: "John Doe",
    },
    {
      label: "Amount in USD",
      type: "number",
      name: "amount",
      placeholder: "John Doe",
    },
    {
      label: "Asset name/Reference",
      type: "text",
      name: "assetname/reference",

      placeholder: "John Doe",
    },
  ];
  return (
    <section className={`wrapper ${styles.estimate}`}>
      <form action="#">
        {inputs.map((input, i) => (
          <Input
            {...input}
            key={i}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </form>
      <div className={styles.buttonContainer}>
        <Button>Send Estimate</Button>
      </div>
    </section>
  );
};

export default BackOfficeEstimate;
