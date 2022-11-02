import React from "react";
import { Range, getTrackBackground } from "react-range";

import styles from "./Range.module.css";

const MyRange = ({ value, setValue }) => {
  return (
    <div className={styles.myRange}>
      <div className={styles.rangeWrapper}>
        <Range
          step={1}
          min={1}
          max={25000}
          values={value}
          onChange={(values) => {
            setValue(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className={styles.rangeStyle}
              style={{
                ...props.style,

                background: getTrackBackground({
                  values: value,
                  colors: ["#BA4D91", "#E4E4E4"],
                  min: 1,
                  max: 25000,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className={styles.rangeThumb}
              style={{
                ...props.style,
              }}
            />
          )}
        />
      </div>
    </div>
  );
};
export default MyRange;
