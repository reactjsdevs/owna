import * as React from "react";
import cx from "classnames";

export const FAQ = () => {
  const [selected, setSelected] = React.useState(-1);

  const toggle = (index) => {
    if (index === selected) {
      setSelected(-1);
    } else {
      setSelected(index);
    }
  };
  const questions = [
    {
      question: "What is Owna pawnbroking?",
      answer: [
        "Pawnbroking is a loan secured by an object of value (jewelry, watch, paintings, car, sneakers' ). By bringing your property to an Owna location and providing all the required documents, you will be able to borrow money and tokens up to 20-70% of the property's value. If you don't pay back, the item will be sold and you will be reimbursed according to the resale price.",
      ],
    },
    {
      question: "What types of property can I pledge?",
      answer: [
        "Jewelry",
        "Watches",
        "Stones",
        "Gold",
        "Paintings & Photos",
        "Cars ",
      ],
    },
    {
      question: "What is the first Step?",
      // answer: [
      //   "Jewelry",
      //   "Watches",
      //   "Stones",
      //   "Gold",
      //   "Paintings & Photos",
      //   "Cars ",
      // ],
      answer: [
        "Download a wallet on your cell phone (e.g. Metamask, Trust, Argent) to connect to Owna on the top right hand side.",
        "By accessing your space you will be able to upload your documents and access the appointment page.",
      ],
    },
    {
      question: "How to get an estimate?",
      answer: [
        "To get an estimate of your property we ask you to make an appointment through the Owna application. Once brought in, an accredited expert will verify the authenticity of the property and will give an estimate within 12 to 48 hours.",
      ],
      list: [
        "Any object can be recovered by making an appointment",
        "Its cost, free of charge, may vary according to the category of the item if its price is above 25 thousand euros",
        "Any fake can be confiscated by the brand (Rolex type)",
      ],
    },
    {
      question: "How do I get my loan?",
      answer: [
        'Once your property is appraised, Owna will ask for your approval directly in the app.Your property will be vaulted and you will get an "Owna NFT" on your "Wallet". The NFT will allow you to accept offers and borrow stable coins.',
        "By going to the P2P Offers tab you will find two types of loan offers:",
        "Fixed Offer: Pay off within 365 days.",
        "Flexible Offer: Keep your debt load below 12% YTD.",
      ],
    },
    {
      question: "What are the rates?",
      answer: [
        "Loan rates are at the discretion of the borrowers and lenders on our platform.",
        "You can expect a 2% listing fee per property. This fee covers the valuation, logistics, escrow and insurance of your property.",
        "Then 1% interest per month of loan rate. All fees and debt are payable at the end of the loan. ",
      ],
    },
    {
      question: "What is my rate?",
      answer: [
        "You accumulate your daily rate (1/365 of your annual rate) defined by the volume of stablecoin borrowed and the accepted offer rate.",
        "No surprises and 100% transparent thanks to the smart contract.",
      ],
    },
    {
      question: "How do I repay?",
      answer: [
        "You can repay your loan at any time by logging into our application and going to the Dashboard tab.",
        "Note: You can pay back your loan all at once or in parts.",
        'Once paid back, you will get your "Owna NFT" back in your "Wallet" which you will need to provide to Owna to retrieve your property.',
      ],
    },
    {
      question: "What happens if I can't pay back?",
      answer: [
        "Your property will be sold at auction (Private and/or Blockchain) to repay your loan. Once repaid, the capital gain from the sale will be refunded to the borrower and Owna.",
      ],
    },
    {
      question: "How long does a pledge last and how does a renewal work?",
      answer: [
        "Fixed Offer: Pay off within 365 days.",
        "Flexible Offer: Keep your debt load below 12% YTD.",
      ],
    },
    {
      question: "What money and stablecoins can I get?",
      answer: ["USDC/ USDT /DAI"],
    },
  ];

  return (
    <div className="max-w-screen-md mx-auto">
      {questions.map((question, index) => {
        const isCurrent = selected !== index;
        return (
          <div className="py-5 border-b border-pink-100" key={index}>
            <div
              className="text-lg lg:text-2xl flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              {question.question}
              <span className="text-mainColor-500 text-3xl lg:text-4xl font-light ml-5 w-10 h-10 flex justify-center items-center">
                {isCurrent ? "+" : "-"}
              </span>
            </div>
            <div
              className={cx("text-body leading-relaxed mt-4 lg:text-lg", {
                hidden: isCurrent,
              })}
              // dangerouslySetInnerHTML={{
              //   __html: question.answer[index],
              // }}
            >
              {question.answer.map((el, i) => (
                <p className="mt-2" key={i}>
                  {el}
                </p>
              ))}{" "}
              {question.list && (
                <ul className="mt-5 list-disc ml-4">
                  {question.list.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
