import React, { useState } from "react";

import Input from "../../Input/Input";

import UploadingPhoto from "./UploadingPhoto/UploadingPhoto";
import CheckBox from "../../Checkbox/CheckBox";
import Button from "../../Button/Button";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import imageLogo from "../../../images/imageLogo.svg";
import styles from "./AppointmentInfo.module.css";

const AppointeMentInfo = () => {
  const [rightAsset, setRightAsset] = useState(false);
  const [notFake, setNotFake] = useState(false);
  const [category, setCategory] = useState("");

  const [categoryVisible, setCategoryVisible] = useState(false);
  const [assetState, setAssetState] = useState("");
  const [assetStateVisible, setAssetStateVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [values, setValues] = useState({
    origin: "",
    size: "",
    stateoftheassest: "",
  });
  const inputs = [
    {
      label: "Size",
      type: "text",
      name: "size",

      placeholder: "John Doe",
    },
    {
      label: "State of the Asset",
      type: "text",
      name: "stateoftheassest",

      placeholder: "john.doe@awsamplify.com",
    },
  ];
  const categories = [
    "Watch",
    "Jewelry",
    "Stone",
    "Gold",
    "Paintings & Photos",
  ];
  const assetStateData = [
    "Brand New",
    "Excellent",
    "VeryGood",
    "Moderate",
    "Bad",
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const uploadPhoto = (e) => {
    setPhoto(e.target.files[0]);
  };
  return (
    <section className={`wrapper ${styles.wrapper}`}>
      <h1 className="title">
        What asset are willing to bring to your appointment?
      </h1>

      <p className={styles.label}>Category</p>
      <div
        className={styles.categoyContainer}
        onClick={() => setCategoryVisible((prev) => !prev)}
      >
        <div className={styles.dropdownAndIcon}>
          <p className={styles.category}>
            {category ? (
              category
            ) : (
              <span className={styles.placeholeder}>Select</span>
            )}
          </p>
          {categoryVisible ? (
            <BsChevronUp
              className={styles.arrow}
              onClick={() => setCategoryVisible((prev) => !prev)}
            />
          ) : (
            <BsChevronDown
              className={styles.arrow}
              onClick={() => setCategoryVisible((prev) => !prev)}
            />
          )}
        </div>
        {categoryVisible && (
          <div className={styles.categories}>
            {categories.map((el, i) => (
              <p
                className={styles.categoryItem}
                key={i}
                onClick={() => {
                  setCategory(el);
                  setCategoryVisible((prev) => !prev);
                }}
              >
                {el}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.originContainer}>
        <p className={styles.label}>Origin</p>
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

      <Input
        label="Size"
        type="text"
        name="size"
        placeholder="John Doe"
        value={values["size"]}
        onChange={onChange}
      />

      <p className={styles.label}>State of the Asset</p>
      <div
        className={styles.categoyContainer}
        onClick={() => setAssetStateVisible((prev) => !prev)}
      >
        <div className={styles.dropdownAndIcon}>
          <p className={styles.category}>
            {assetState ? (
              assetState
            ) : (
              <span className={styles.placeholeder}>Select</span>
            )}
          </p>
          {assetStateVisible ? (
            <BsChevronUp
              className={styles.arrow}
              onClick={() => setAssetStateVisible((prev) => !prev)}
            />
          ) : (
            <BsChevronDown
              className={styles.arrow}
              onClick={() => setAssetStateVisible((prev) => !prev)}
            />
          )}
        </div>
        {assetStateVisible && (
          <div className={styles.categories}>
            {assetStateData.map((el, i) => (
              <p
                className={styles.categoryItem}
                key={i}
                onClick={() => {
                  setAssetState(el);
                  setAssetStateVisible((prev) => !prev);
                }}
              >
                {el}
              </p>
            ))}
          </div>
        )}
      </div>

      <UploadingPhoto />
      <div className={styles.checkBoxContainer}>
        {" "}
        <form action="#">
          {" "}
          <CheckBox
            checked={rightAsset}
            setChecked={setRightAsset}
            label="I certify that all the photos are taken by me and are showing the asset brought to the appointment."
          />{" "}
          <CheckBox
            checked={notFake}
            setChecked={setNotFake}
            label="I certify the asset is not Fake and fully understand that Owna’s partners will keep it if fake."
          />
        </form>
      </div>
      <Button to="/connect">Appointment</Button>
    </section>
  );
};

export default AppointeMentInfo;
