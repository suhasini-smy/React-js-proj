import styles from "./Navigation.module.css";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className={styles.navigation}>
      {/* <h1>Home</h1> */}
      <HeroSection />
    </div>
  );
};

export default Home;
