import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlWallet } from "react-icons/sl";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import userPhoto from "../../assets/Oval.svg";
import BalanceService from "../../services/BalanceService";
import { headerIcon, headerLinks } from "../constants/headerLinks";
import HeaderModal from "../Modal/HeaderModal/HeaderModal";

const HeaderPrivate = () => {
  const [balance, setBalance] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const payload = {
    currency: "USD",
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      BalanceService.init();
    } else {
      BalanceService.destruct();
    }
  }, []);

  BalanceService.socket.on("BALANCE_UPDATED", ({ data }) => {
  });

  BalanceService.socket.emit("GET_BALANCE", payload, ({ data }) => {
    setBalance(data.balance);
  });

  return (
    <div className="flex flex-row items-center justify-between container w-full h-full">
      <div className="flex flex-row items-center h-full gap-[28px]">
        <div className="cursor-pointer">
          <img className="mr-[45.5px]" src={Logo} alt="Logo" />
        </div>
        <nav className="hidden lg:flex flex-row items-center h-full">
          {headerLinks.map(links => (
            <Link
              className="hover:bg-quaternary flex items-center h-full uppercase text-[#F0F0F0] text-[14px] leading-[17px] font-tt-medium px-[18px]"
              key={links.id}
              to={links.href}
            >
              {links.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-row items-center h-full">
        {headerIcon.map(icon => (
          <div
            key={icon.id}
            className="hidden xl:flex items-center px-[16px] md:px-[20px] border-l border-[#343848] h-full hover:bg-[#2b2e3e] cursor-pointer"
          >
            <img src={icon.url} className="w-[22px] h-[22px]" alt={icon.url} />
          </div>
        ))}
        <div className="flex flex-row gap-[22px] items-center px-[16px] md:px-[22px] border-x border-[#2b2e3e] h-full">
          <div className="cursor-pointer select-none flex flex-row gap-[12px] items-center">
            <SlWallet className="text-[#F0F0F0] text-lg" />
            <div className="text-left">
              <p className="text-[#F0F0F0] text-[14px] leading-[17px] uppercase font-medium">
                balance:
              </p>
              <p className="text-[#00D8BE] text-[14px] leading-[17px] uppercase">
                {balance}
              </p>
            </div>
            <button className="uppercase text-center rounded-[8px] transition disabled:cursor-not-allowed w-[90px] text-[#141422] font-semibold text-[14px] leading-[17px] py-[10px] bg-[#00D8BE] hover:bg-[##0fb0a1] ">
              Deposit
            </button>
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-between gap-[12px] pl-[16px] sm:pl-[22px]"
          onClick={onOpen}
        >
          <div className="hidden sm:block cursor-pointer">
            <img src={userPhoto} alt="user_photo" />
          </div>
          <RxHamburgerMenu className="text-[#F0F0F0] text-xl font-bold " />
        </div>
        <HeaderModal isOpen={isOpen} onClose={onClose} balance={balance} />
      </div>
    </div>
  );
};

export default HeaderPrivate;
