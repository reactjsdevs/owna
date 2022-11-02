import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({
  children,
  type,
  color,
  background,
  to,
  href,
  width,
  disabled,
}) => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={styles.button}
          style={{ color: color, background: background, width: width }}
        >
          {children}
        </Link>
      ) : href ? (
        <a
          href={href}
          type={type}
          className={styles.button}
          style={{ color: color, background: background, width: width }}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={styles.button}
          style={{
            color: disabled ? "#ccc" : color,
            background: background,
            width: width,
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
