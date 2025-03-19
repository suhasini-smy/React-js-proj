import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Navigation /> */}
        {/* <HeroSection /> */}

        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
