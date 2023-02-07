import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive
    ? "w-1/2 text-center text-[#00D8BE] pb-[3px] border-b-2 border-b-[#00D8BE]"
    : "w-1/2 text-center pb-[3px] border-b-2 border-b-[#8F8F9F]";

const Tabs = () => {
  return (
    <div className="flex mb-10 text-[#8F8F9F] text-xl leading-[23px] uppercase font-tt-medium">
      <NavLink to="/login" className={setActive}>
        log in
      </NavLink>
      <NavLink to="/sign_up" className={setActive}>
        sign up
      </NavLink>
    </div>
  );
};

export default Tabs;
