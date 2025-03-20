import React from "react";
import styles from "./ContactHeader.module.css";
import { MdMessage } from "react-icons/md";

const ContactHeader = () => {
  return (
    <div>
      <div className={styles.contact_us_2}>
        <div className={`big_container ${styles.responsive_container_block} `}>
          <div className={styles.blueBG}></div>
          <div className={`container ${styles.responsive_container_block}`}>
            <form className={styles.form_box}>
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
                      id="ijowk"
                      name="FirstName"
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
                      id="indfi"
                      name="Last Name"
                      placeholder="Please enter last name..."
                    />
                  </div>
                  <div
                    className={`${styles.responsive_cell_block} wk_desk_6 wk_ipadp_6 wk_tab_12 wk_mobile_12`}
                  >
                    <p className={`${styles.text_blk} input_title`}>EMAIL</p>
                    <input
                      className={styles.input}
                      id="ipmgh"
                      name="Email"
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
                      id="imgis"
                      name="PhoneNumber"
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
                      id="i5vyy"
                      placeholder="Please enter query..."
                    ></textarea>
                  </div>
                </div>
                <button className={styles.submit_btn}>
                  <MdMessage fontSize="24px" />
                  Submit
                </button>
              </div>
              {/* <div className={styles.social_media_links}>
                <a href="#" id="ix94i_2">
                  <img
                    className={styles.link_img}
                    src="https://workik_widget_assets.s3.amazonaws.com/Footer1_83/v1/images/Icon_twitter.png"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.link_img}
                    src="https://workik_widget_assets.s3.amazonaws.com/Footer1_83/v1/images/Icon_facebook.png"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.link_img}
                    src="https://workik_widget_assets.s3.amazonaws.com/Footer1_83/v1/images/Icon_google.png"
                  />
                </a>
                <a href="#" id="izldf_2">
                  <img
                    className={styles.link_img}
                    src="https://workik_widget_assets.s3.amazonaws.com/Footer1_83/v1/images/Icon_instagram.png"
                  />
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
