import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ title, text, padding, noPadding }) => {
  return (
    <div
      className={styles.heading}
      style={{
        paddingLeft: padding && "15px",
        padding: noPadding && "0 0",
        paddingBottom: noPadding && "50px",
      }}
    >
      <h1 className={styles.title} styles={{}}>
        {" "}
        {title}
      </h1>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default Heading;
