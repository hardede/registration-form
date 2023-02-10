import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { GET_PROFILE } from "../../apollo/getProfile";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const [userProfile, setUserProfile] = useState({});
  const [getProfile, { data }] = useLazyQuery(GET_PROFILE, {
    context: { clientName: "profile" },
  });

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (data) {
      setUserProfile(data.getProfile);
    }
  }, [data]);

  const onClickLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header className="absolute left-0 top-0 w-full z-10 px-[85px] bg-[#1A1C2A]">
      <div className="flex justify-between text-center items-center">
        <img src={Logo} alt="Logo" />
        <div className="flex text-center items-center before:mr-5 before:content-[''] before:block before:w-[1px] before:h-[56px] before:bg-[#343848]">
          {data ? (
            <div className="flex items-center text-[#F0F0F0] ">
              <p className="flex items-center mr-5 after:ml-5 after:content-[''] after:block after:w-[1px] after:h-[56px] after:bg-[#343848]">
                {userProfile.email}
              </p>
              <div
                className="btn py-2.5 bg-[#00D8BE]  text-[#1A1C2A] rounded-lg cursor-pointer"
                onClick={onClickLogout}
              >
                log out
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}

          <div className="flex text-center items-center  before:mr-5 before:content-[''] before:block before:w-[1px] before:h-[56px] before:bg-[#343848] after:ml-5 after:content-[''] after:block after:w-[1px] after:h-[56px] after:bg-[#343848]">
            <RxHamburgerMenu className="text-[#F0F0F0] text-lg font-bold  " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
