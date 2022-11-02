import cx from "classnames";
import styles from "./List.module.css";

export const List = ({ items, className }) => {
  return (
    <ul className={cx(styles.list, className)}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
