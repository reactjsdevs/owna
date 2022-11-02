import React from "react";
import Switch from "react-switch";

const MySwitch = ({ setChecked, checked }) => {
  return (
    <Switch
      onChange={() => setChecked(!checked)}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor="#BA4D91"
      offColor="#E2E2E2"
    />
  );
};
export default MySwitch;
