import React from "react";
import styles from "./Stake.module.css";
import usdtIcon from "../../../images/usdt.svg";
import onaIcon from "../../../images/ona.svg";
import StakeComponents from "./StakeComponents/StakeComponents";
import { useState } from "react";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import StakeModal from "./StakeComponents/Modal/StakeModal";
import { useDataContext } from "../../../context/context";
import UnStakeModal from "./StakeComponents/Modal/UnStakeModal";
import ClaimModal from "./StakeComponents/Modal/ClaimModal";

const Stake = () => {
  const [unstakeModal, setUnstakeModal] = useState(false);
  const [claimModal, setClaimModal] = useState(false);
  const [stakeModal, setStakeModal] = useState(false);
  const { scrollToTop } = useDataContext();

  const data = [
    {
      percentage: "11.00%",
      getButton: {
        text: "Get USDT Token",
      },
      img: usdtIcon,
      currency: "USDT",
      stake: false,
      amount: 0,
      amountUSD: 0,
      button: { text: " Unstake USDT" },
      dayTitle: "Cooldown period",
      day: 10,
      myModal: <UnStakeModal setPopup={setUnstakeModal} img={usdtIcon} />,
      modal: unstakeModal,
      setModal: setUnstakeModal,
    },
    {
      percentage: "11.00%",
      getButton: {
        text: "Get USDT ONA",
      },
      img: onaIcon,
      currency: "USDT",
      claim: true,
      amount: 0,
      amountUSD: 0,
      button: { text: " Claim USDT" },
      dayTitle: "USDT per month",
      usdt: "0",
      myModal: <ClaimModal setPopup={setClaimModal} img={usdtIcon} />,
      modal: claimModal,
      setModal: setClaimModal,
    },
  ];
  return (
    <section className={styles.stake}>
      <Heading
        title="Stake"
        text="Deposit liquidity in Owna's Pool to earn interests"
      />
      <div className={styles.usdtContainer}>
        <div className={styles.usdt}>
          <img src={usdtIcon} alt="#" className={styles.image} />
          <p className={styles.currency}>USDT</p>
        </div>
        <div className={styles.appromaxContainer}>
          <p className={styles.appromax}>Staking APR</p>
          <span className={styles.percentage}>9.75%</span>
        </div>
        <div className={styles.appromaxContainer}>
          <p className={styles.appromax}>Projected APR</p>
          <span className={styles.percentage}>12%</span>
        </div>{" "}
        <div className={styles.appromaxContainer}>
          <p className={styles.appromax}>Wallet Balance</p>
          <span className={styles.percentage}>0</span>
        </div>
        <div className={styles.appromaxContainer}>
          {" "}
          <div
            onClick={() => {
              setStakeModal(true);
              scrollToTop();
            }}
          >
            <Button>Stake</Button>
          </div>
        </div>
      </div>
      <div className={styles.componentswrapper}>
        {data.map((el, i) => (
          <StakeComponents {...el} key={i} />
        ))}
      </div>
      {stakeModal && <StakeModal setPopup={setStakeModal} img={usdtIcon} />}
    </section>
  );
};

export default Stake;
