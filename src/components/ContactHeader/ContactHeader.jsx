import React, { useState } from "react";
import styles from "./ContactHeader.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";
import { HiMail } from "react-icons/hi";

const ContactHeader = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pnum, setPnum] = useState("");

  const onViaCallSUbmit = () => {
    console.log("I am from call");
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    setFname(e.target[0].value);
    setLname(e.target[1].value);
    setEmail(e.target[2].value);
    setPnum(e.target[3].value);
    setAddress(e.target[4].value);
  };

  return (
    <div>
      <div className={styles.contact_us_2}>
        <div className={`big_container ${styles.responsive_container_block} `}>
          <div className={styles.blueBG}></div>
          <div className={`container ${styles.responsive_container_block}`}>
            <Button
              onClick={onViaCallSUbmit}
              isoutline={true}
              icon={<HiMail />}
              contentbtn1="Via Support"
              contentbtn2="Via Call"
            />
            <form className={styles.form_box} onSubmit={OnSubmit}>
              <div className={`form_wrapper ${styles.container_block}`}>
                <p className={`${styles.text_blk}  contactus_head`}>
                  Get in Touch
                </p>
                <p className={`${styles.text_blk} contactus_subhead`}>
                  Nunc erat cursus tellus gravida.
                </p>
                <div className={styles.responsive_container_block}>
                  <div
                    className={`${styles.responsive_cell_block} wk_ipadp_6 wk_tab_12 wk_mobile_12 wk_desk_6`}
                    id="i10mt"
                  >
                    <p className={`${styles.text_blk} input_title`}>
                      FIRST NAME
                    </p>
                    <input
                      className={styles.input}
                      id="fname"
                      name="fname"
                      placeholder="Please enter first name..."
                    />
                  </div>
                  <div
                    className={`${styles.responsive_cell_block} wk_desk_6 wk_ipadp_6 wk_tab_12 wk_mobile_12`}
                  >
                    <p className={`${styles.text_blk} input_title`}>
                      LAST NAME
                    </p>
                    <input
                      className={styles.input}
                      id="lname"
                      name="lname"
                      placeholder="Please enter last name..."
                    />
                  </div>
                  <div
                    className={`${styles.responsive_cell_block} wk_desk_6 wk_ipadp_6 wk_tab_12 wk_mobile_12`}
                  >
                    <p className={`${styles.text_blk} input_title`}>EMAIL</p>
                    <input
                      className={styles.input}
                      id="email"
                      name="email"
                      placeholder="Please enter email..."
                    />
                  </div>
                  <div
                    className={`${styles.responsive_cell_block} wk_desk_6 wk_ipadp_6 wk_tab_12 wk_mobile_12`}
                  >
                    <p className={`${styles.text_blk} input_title`}>
                      PHONE NUMBER
                    </p>
                    <input
                      className={`${styles.input}`}
                      id="pnum"
                      name="pnum"
                      placeholder="Please enter phone number..."
                    />
                  </div>
                  <div
                    className={`${styles.responsive_cell_block} wk_tab_12 wk_mobile_12 wk_desk_12 wk_ipadp_12`}
                    id="i634i"
                  >
                    <p className={`${styles.text_blk} input_title`}>
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea
                      className={styles.textinput}
                      id="area"
                      name="area"
                      placeholder="Please enter query..."
                    ></textarea>
                  </div>
                </div>
                <button className={styles.submit_btn}>
                  <MdMessage fontSize="24px" />
                  Submit
                </button>
              </div>
            </form>

            <div>
              <p>{fname + "--first name--"}</p>
              <p>{lname + "--lname--"}</p>
              <p>{email + "--email--"}</p>
              <p>{pnum + "--pnumber--"}</p>
              <p>{address + "--address--"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
