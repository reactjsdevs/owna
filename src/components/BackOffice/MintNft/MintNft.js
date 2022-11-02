import React, { useState } from "react";
import ImageVideo from "./ImageVideo/ImageVideo";
import Input from "../../../components/Input/Input";
import Button from "../../Button/Button";
import { FiPlus } from "react-icons/fi";
import propertiesImage from "../../../images/propertise.svg";
import levelsImage from "../../../images/levels.svg";
import statsImage from "../../../images/stats.svg";
import unlockImage from "../../../images/unlock.svg";

import styles from "./MintNft.module.css";
import MySwitch from "./Switch/Switch";
import LevelsModal from "./Modals/LevelsModal";
import imageLogo from "../../../images/imageLogo.svg";

const MintNft = () => {
  const [properties, setProperties] = useState(false);
  const [levels, setLevels] = useState(false);
  const [stats, setStats] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [pdf, setPdf] = useState("");
  const uploadPhoto = (e) => {
    setPdf(e.target.files[0]);
  };
  const formData = [
    {
      label: "First Name",
      type: "text",
      name: "fname",
      placeholder: "John Doe",
    },
    {
      label: "External Links",
      type: "text",
      name: "link",
      placeholder: "John Doe",
    },
    {
      label: "Description",
      type: "text",
      name: "description",
      placeholder: "Seattle, WA",
    },
    {
      label: "Collection",
      type: "text",
      name: "collection",
      placeholder: "john.doe@awsamplify.com",
    },
  ];

  const info = [
    {
      image: propertiesImage,
      title: "Propertise",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      setModal: setProperties,
    },
    {
      image: levelsImage,
      title: "Levels",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      setModal: setLevels,
    },
    {
      image: statsImage,
      title: "Stats",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      setModal: setStats,
    },
  ];
  return (
    <div className={`wrapper ${styles.mintNft}`}>
      <h1 className="title">Create New Item</h1>
      <form action="#">
        <Input
          label="Wallet Address"
          type="text"
          name="walletaddress"
          placeholder="John Doe"
        />
        <ImageVideo />

        {formData.map((el, i) => (
          <Input {...el} key={i} />
        ))}
      </form>
      {info.map((el, i) => (
        <div className={styles.info} key={i}>
          <div className={styles.infoWrapper}>
            <div className={styles.iconAndContainer}>
              <img src={el.image} alt="#" className={styles.icon} />
              <div className={styles.titleAndText}>
                <h5 className={styles.title}>{el.title}</h5>{" "}
                <p className={styles.text}>{el.text} </p>
              </div>
            </div>
            <div
              className={styles.plusWrapper}
              onClick={() => {
                el.setModal(true);
                window.scrollTo({ top: 0 });
              }}
            >
              <FiPlus className={styles.plus} />
            </div>
          </div>
        </div>
      ))}
      <div className={styles.info}>
        <div className={styles.infoWrapper}>
          <div className={styles.iconAndContainer}>
            <img src={unlockImage} alt="#" className={styles.icon} />
            <div className={styles.titleAndText}>
              <h5 className={styles.title}>Propertise</h5>{" "}
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div className={`${styles.plusWrapper} ${styles.unlock}`} s>
            <MySwitch checked={unlock} setChecked={setUnlock} />
          </div>
        </div>
      </div>
      <div className={styles.labelContainer}>
        <label className={`${styles.label} ${styles.text}`}>
          {" "}
          Additional Document
        </label>
        {/* <div className={styles.photoContainer}>
          <label htmlFor="photo">
            <img src={imageLogo} alt="#" className={styles.imageLogo} />
          </label>

          <input
            id="photo"
            type="file"
            onChange={uploadPhoto}
            className={styles.inputFile}
          />
        </div> */}
        <label htmlFor="id" className={styles.button}>
          Upload
          <input type="file" id="id" className={styles.input} />
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Submit</Button>
      </div>{" "}
      {properties && <LevelsModal setModal={setProperties} />}{" "}
      {levels && <LevelsModal setModal={setLevels} />}{" "}
      {stats && <LevelsModal setModal={setStats} />}
    </div>
  );
};

export default MintNft;
