import React from "react";
import MarketPlaceComponents from "./MarketPlaceComponents/MarketPlaceComponents";
import borrower from "../../../images/borrower.png";
import styles from "./MarketPlace.module.css";
import Heading from "../../Heading/Heading";

const MarketPlace = () => {
  const data = [
    {
      info: [
        { title: "Borrower ", text: "1e8e82 ", img: borrower },
        { title: "Category ", text: "10 Aug 11:08" },

        { title: "Received", text: "10 Aug 11:08" },

        { title: "Quality control ", text: "8 Flexible" },

        {
          title: "Max Value Borrowing Capacity ",
          text: "25 000 USDT ",
        },
      ],
      button: { text: "Make Offer", to: "" },
    },
    {
      info: [
        { title: "Borrower ", text: "1e8e82 ", img: borrower },
        { title: "Category ", text: "10 Aug 11:08" },

        { title: "Received", text: "10 Aug 11:08" },

        { title: "Quality control ", text: "8 Flexible" },

        {
          title: "Max Value Borrowing Capacity ",
          text: "25 000 USDT ",
        },
      ],
      button: { text: "Make Offer", to: "" },
    },
    {
      info: [
        { title: "Borrower ", text: "1e8e82 ", img: borrower },
        { title: "Category ", text: "10 Aug 11:08" },

        { title: "Received", text: "10 Aug 11:08" },

        { title: "Quality control ", text: "8 Flexible" },

        {
          title: "Max Value Borrowing Capacity ",
          text: "25 000 USDT ",
        },
      ],
      button: { text: "Make Offer", to: "" },
    },
    {
      info: [
        { title: "Borrower ", text: "1e8e82 ", img: borrower },
        { title: "Category ", text: "10 Aug 11:08" },

        { title: "Received", text: "10 Aug 11:08" },

        { title: "Quality control ", text: "8 Flexible" },

        {
          title: "Max Value Borrowing Capacity ",
          text: "25 000 USDT ",
        },
      ],
      button: { text: "Make Offer", to: "" },
    },
  ];
  return (
    <section className={styles.marketPlace}>
      <Heading
        title="Lend "
        text="Offer loans to other users on their no-fungible tokens"
        padding
      />
      {data.map((el, i) => (
        <MarketPlaceComponents data={el} key={i}></MarketPlaceComponents>
      ))}
    </section>
  );
};

export default MarketPlace;
