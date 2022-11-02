import React from "react";
import P2pComponents from "./P2pComponents/P2pComponents";
import Heading from "../../Heading/Heading";
import styles from "./P2poffer.module.css";

const P2poffer = () => {
  const p2poffer = [
    {
      info: [
        { title: "Lender ", text: "1e8e82 " },
        { title: "Expiration ", text: "in 72h " },

        { title: "Received ", text: "10 Aug 11:08 " },

        { title: "Duration ", text: "8 Flexible" },

        { title: "APR ", text: "16% " },

        { title: "Condition ", text: "Total debt must remain under 14% APR " },

        { title: "Loan Maxv alue  ", text: "25 000 USDT " },
      ],
    },
    {
      info: [
        { title: "Lender ", text: "1e8e82 " },
        { title: "Expiration ", text: "in 72h " },

        { title: "Received ", text: "10 Aug 11:08 " },

        { title: "Duration ", text: "8 Flexible" },

        { title: "APR ", text: "16% " },

        { title: "Condition ", text: "Total debt must remain under 14% APR " },

        { title: "Loan Maxv alue  ", text: "25 000 USDT " },
      ],
    },
  ];
  return (
    <>
      <section className={` ${styles.p2pOffer}`}>
        <Heading
          padding
          title="Borrow"
          text="Access to peer to peer loan offers with your NFT"
        />
        {p2poffer.map((el, i) => (
          <P2pComponents data={el} key={i} />
        ))}
      </section>
    </>
  );
};

export default P2poffer;
