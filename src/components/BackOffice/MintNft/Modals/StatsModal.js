import React, { useState } from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import styles from "./style.module.css";

const PropertiesModal = ({ setModal }) => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    walletaddress: "",
    id: "",
    proofofaddress: "",
  });
  const inputs = [
    {
      label: "Type",
      type: "text",
      name: "type",
      placeholder: "John Doe",
    },
    { label: "Name", type: "text", name: "name", placeholder: "John Doe" },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <h2 className={styles.title}>Add Stats</h2>
          <p className={styles.tagline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            enim venenatis sapien, ut ut.
          </p>
          <form action="#" className={styles.form}>
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
            <div onClick={() => setModal(false)}>
              <Button background="#E7E7E7" color="#323232">
                Add More
              </Button>
            </div>
            <div onClick={() => setModal(false)}>
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.modal} onClick={() => setModal(false)}></div>
    </>
  );
};

export default PropertiesModal;
