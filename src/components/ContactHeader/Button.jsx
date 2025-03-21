import React from "react";
import styles from "./ContactHeader.module.css";

const Button = ({
  isoutline,
  icon,
  text,
  contentbtn2,
  contentbtn1,
  ...rest
}) => {
  return (
    <>
      <button {...rest} className={styles.btn_gap}>
        {contentbtn1}
      </button>
      <button className={isoutline ? styles.outline_btn : styles.btn_gap}>
        {icon} {contentbtn2}
      </button>
    </>
  );
};

export default Button;
