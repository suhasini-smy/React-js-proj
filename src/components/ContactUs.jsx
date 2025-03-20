import styles from "./Navigation.module.css";
import ContactHeader from "./ContactHeader/ContactHeader";

const Contactus = () => {
  console.log("Hello Contact");
  return (
    <div className={styles.navigation}>
      <ContactHeader />
    </div>
  );
};

export default Contactus;
