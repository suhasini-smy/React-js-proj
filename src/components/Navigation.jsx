import { Outlet, NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={styles.navigation}>
        <div className="logo">
          <img src="/images/brand_logo.jpg" alt="logo" className="logoBrand" />
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact</NavLink>
          </li>
        </ul>
        <button className="btn-color">Login</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
