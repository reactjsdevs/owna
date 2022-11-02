import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const BackOfficeButton = ({ sidebar }) => {
  const [backOfficeDropdown, setBackOfficeDropdown] = useState(false);
  const OfficeDropdown = [
    { name: "MINT NFT", to: "/mintnft" },
    { name: "Send Estimate", to: "/sendestimate" },
    { name: "Send Offer", to: "/sendoffer" },
  ];
  return (
    <div
      className={`${styles.backOffice} ${sidebar && styles.backOfficeMobile}`}
      onClick={() => setBackOfficeDropdown((prev) => !prev)}
    >
      <Button>BackOffice</Button>
      <div onClick={() => setBackOfficeDropdown((prev) => !prev)}>
        {backOfficeDropdown && (
          <div
            className={`${styles.backOfficeDropdown} ${styles.dropdown}`}
            onClick={() => setBackOfficeDropdown(false)}
          >
            {OfficeDropdown.map((el, i) => (
              <Link
                to={el.to}
                className={`${styles.dropdownItem} ${styles.navLink}`}
                key={i}
              >
                {el.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackOfficeButton;
