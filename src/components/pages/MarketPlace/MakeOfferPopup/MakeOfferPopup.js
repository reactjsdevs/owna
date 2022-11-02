import React, { useState } from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import styles from "./MakeOfferPopup.module.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const MakeOfferPopup = ({ setPopup }) => {
  const [open, setOpen] = useState(0);
  const [values, setValues] = useState({
    period: "",

    data: [
      {
        entryfee: "",
        apr: "",
        loanMinValue: "",
        loanMaxValue: "",
      },
      {
        entryfee: "",
        apr: "",
        loanMinValue: "",
        loanMaxValue: "",
        maximumacceptabledebt: "",
      },
    ],
  });
  const inputs = [
    {
      fixed: true,
      title: "Fixed",
      info: [
        {
          label: "Entry fee",
          type: "text",
          name: "entryfee",
          placeholder: "John Doe",
        },
        {
          label: "APR",
          type: "text",
          name: "apr",
          placeholder: "John Doe",
        },
        {
          label: "Loan Min value",
          type: "text",
          name: "loanMinValue",
          placeholder: "John Doe",
        },
        {
          label: "Loan Max value",
          type: "text",
          name: "loanMaxValue",
          placeholder: "John Doe",
        },
      ],
    },
    {
      title: "Flexible",
      info: [
        {
          label: "Entry fee",
          type: "text",
          name: "entryfee",
          placeholder: "John Doe",
        },
        {
          label: "APR",
          type: "text",
          name: "apr",
          placeholder: "John Doe",
        },
        {
          label: "Loan Min value",
          type: "text",
          name: "loanMinValue",
          placeholder: "John Doe",
        },
        {
          label: "Loan Max value",
          type: "text",
          name: "loanMaxValue",
          placeholder: "John Doe",
        },
        {
          label: "Maximum acceptable Debt % (YDT)",
          type: "text",
          name: "maximumacceptabledebt",
          placeholder: "John Doe",
        },
      ],
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const showOpen = () => {
    if (open === 0) {
      setOpen(1);
    }
    if (open === 1) {
      setOpen(0);
    }
  };
  const [period, setPeriod] = useState("");
  const [periodVisible, setPeriodVisible] = useState(false);
  const [customPeriod, setCustomPeriod] = useState(false);
  const periods = [7, 14, 30, 60, 90];
  return (
    <>
      {" "}
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          {inputs.map((items, i) => (
            <div className={styles.dataWrapper} key={i}>
              <div className={styles.titleContainer}>
                <h2 className={`${styles.title} title`}>{items.title} </h2>
                {open === i ? (
                  <BsChevronUp
                    className={`${styles.icon} ${styles.title}`}
                    onClick={showOpen}
                  />
                ) : (
                  <BsChevronDown
                    className={`${styles.icon} ${styles.title}`}
                    onClick={() => {
                      showOpen();
                    }}
                  />
                )}
              </div>
              {open === i && (
                <form action="#">
                  {items.fixed && (
                    <div className={styles.periodAndDuration}>
                      {" "}
                      <div className={styles.labelContainer}>
                        <p className={styles.label}>Set Period</p>
                        <div className={styles.categoyContainer}>
                          <div className={styles.dropdownAndIcon}>
                            {customPeriod ? (
                              <input
                                className={styles.periodInput}
                                type="text"
                                placeholder="Enter Period"
                                value={values["period"]}
                                onChange={onChange}
                                name="period"
                              />
                            ) : (
                              <p className={styles.category}>
                                {period ? (
                                  `${period} Days`
                                ) : (
                                  <span className={styles.placeholeder}>
                                    Select
                                  </span>
                                )}
                              </p>
                            )}
                            {periodVisible ? (
                              <BsChevronUp
                                className={styles.arrow}
                                onClick={() =>
                                  setPeriodVisible((prev) => !prev)
                                }
                              />
                            ) : (
                              <BsChevronDown
                                className={styles.arrow}
                                onClick={() => {
                                  setPeriodVisible((prev) => !prev);
                                  setCustomPeriod(false);
                                }}
                              />
                            )}
                          </div>
                          {periodVisible && (
                            <div className={styles.categories}>
                              {periods.map((el, i) => (
                                <p
                                  className={styles.categoryItem}
                                  key={i}
                                  onClick={() => {
                                    setPeriod(el);
                                    setPeriodVisible((prev) => !prev);
                                  }}
                                >
                                  {el}
                                </p>
                              ))}
                              <p
                                className={styles.categoryItem}
                                onClick={() => {
                                  setPeriodVisible((prev) => !prev);
                                  setCustomPeriod((prev) => true);
                                }}
                              >
                                Custom Period
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {items.info.map((input, i) => (
                    <Input
                      {...input}
                      key={i}
                      value={values.data[input.name]}
                      onChange={onChange}
                    />
                  ))}
                </form>
              )}
            </div>
          ))}

          <div
            className={styles.buttonContainer}
            onClick={() => setPopup(false)}
          >
            <Button>Submit Offer</Button>
          </div>
        </div>
      </section>
      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default MakeOfferPopup;
