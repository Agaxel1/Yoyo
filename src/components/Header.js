import React from "react";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import "swiper/css";
import "swiper/css/navigation";
import "../CSS/styles.css";


const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <SubNavbar/>
    </header>
  );
};

export default Header;
