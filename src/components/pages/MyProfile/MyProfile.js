import React, { useState } from "react";
import { useDataContext } from "../../../context/context";

import Button from "../../Button/Button";
import CheckBox from "../../Checkbox/CheckBox";
import Input from "../../Input/Input";
import styles from "./MyProfile.module.css";

const MyProfile = () => {
  const { scrollTotop } = useDataContext();
  const [checked, setChecked] = useState(false);

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
      label: "First Name",
      type: "text",
      name: "fname",
      placeholder: "John Doe",
    },
    {
      label: "Last Name",
      type: "text",
      name: "lname",
      placeholder: "John Doe",
    },
    {
      label: "email",
      type: "email",
      name: "email",

      placeholder: "john.doe@awsamplify.com",
    },
    {
      label: "Wallet Address",
      type: "text",
      name: "walletaddress",
      placeholder: "Seattle, WA",
    },
    // {
    //   label: "ID",
    //   type: "text",
    //   name: "id",
    //   placeholder: "Seattle, WA",
    // },
    // {
    //   label: "Proof of Address",
    //   type: "text",
    //   name: "proofofaddress",
    //   placeholder: "john.doe@awsamplify.comA",
    // },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className={`${styles.home} wrapper`}>
      <form action="#">
        {inputs.map((input, i) => (
          <Input
            {...input}
            key={i}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className={styles.labelContainer}>
          <label className={`${styles.label} ${styles.text}`}> ID</label>
          <label htmlFor="id" className={styles.button}>
            Upload
            <input type="file" id="id" className={styles.input} />
          </label>
        </div>
        <div className={styles.labelContainer}>
          <label className={`${styles.label} ${styles.text}`}>
            {" "}
            Proof of Address
          </label>
          <label htmlFor="id" className={styles.button}>
            Upload
            <input type="file" id="id" className={styles.input} />
          </label>
        </div>
        <CheckBox
          checked={checked}
          setChecked={setChecked}
          label="As Owna is a decentralized protocol and respects your privacy, we recommend you not to use your main wallet account. Your email will be linked to the given wallet for Owna to notify you"
        />
      </form>
      <div className={styles.buttonContainer} onClick={scrollTotop}>
        <Button to="/whatareyouwillingtodo">Next</Button>
      </div>
    </section>
  );
};

export default MyProfile;
