import styles from "./Navigation.module.css";

const HeroSection = () => {
  return (
    <>
      <main className={`hero ${styles.navigation}`}>
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE"RE HERE TO HELP YOU WITH OUR SHOES
            YOUR FEET DESERVE THE BEST AND WE"RE HERE TO HELP WITH OUR SHOES
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Aso Avilable On</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="clip-cart" />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero-image" />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
