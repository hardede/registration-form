import { React, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import HeaderPrivate from "./HeaderPrivate";

const Header = () => {
  const [header, setHeader] = useState(false);

   useEffect(() => {
     if (localStorage.getItem("token") !== null) {
       setHeader(!header);
     }
   }, []);

  return (
    <header className="sticky top-0 w-full z-200 px-[85px] h-[54px] bg-[#1A1C2A] sm:h-[64px]">
      {!header ? (
        <div className="flex justify-between text-center items-center">
          <img src={Logo} alt="Logo" />
          <div className="flex text-center items-center before:mr-5 before:content-[''] before:block before:w-[1px] before:h-[56px] before:bg-[#343848]">
            <NavLink
              className={({ isActive }) => {
                return !isActive ? "btn" : "btn-active";
              }}
              to="/login"
            >
              log in
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return !isActive ? "btn" : "btn-active";
              }}
              to="/sign_up"
            >
              sign up
            </NavLink>

            <div className="flex text-center items-center  before:mr-5 before:content-[''] before:block before:w-[1px] before:h-[56px] before:bg-[#343848] after:ml-5 after:content-[''] after:block after:w-[1px] after:h-[56px] after:bg-[#343848]">
              <RxHamburgerMenu className="text-[#F0F0F0] text-lg font-bold  " />
            </div>
          </div>
        </div>
      ) : (
        <HeaderPrivate />
      )}
    </header>
  );
};

export default Header;
