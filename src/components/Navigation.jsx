import { Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
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
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
