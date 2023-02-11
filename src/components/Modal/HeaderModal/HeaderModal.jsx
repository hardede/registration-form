import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import adult from "../../../assets/18+.svg";
import { modalLinks, modalLinksSup, modalSocialLinks } from '../../constants/modalLinks';

const HeaderModal = ({ isOpen, onOpen, onClose }) => {
  const finalRef = useRef(null);
  const onClickLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Modal
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      id="mymodal"
    >
      <ModalOverlay />
      <ModalContent>
        <Button className="text-red-500" onClick={onClose}>
          Cancel
        </Button>
        <ModalHeader px="0">
          <div className="flex flex-row gap-[8px] items-center">
            <div className="h-[40px] w-[40px]">
              <div className="bg-[#00D8BE] bg-cover bg-no-repeat header-avatar bg-center w-[40px] h-[40px] rounded-full relative" />
            </div>
            <div className="font-tt-medium">
              <p className="text-[#F0F0F0] text-[16px] leading-[18px]">
                Player
              </p>
              <div className="text-[14px] leading-[14px]">
                <span className="text-[#8f8f9f] capitalize  mr-[5px]">
                  Balance:
                </span>
                <span className="text-[#00D8BE]">0.00</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[8px] mt-[16px]">
            <button className="w-1/2 text-center rounded-[8px] transition disabled:cursor-not-allowed text-[#141422] font-semibold text-[14px] leading-[17px] py-[10px] bg-[#00D8BE] hover:bg-[#0fb0a1]">
              Deposit
            </button>
            <button className="w-1/2 text-center rounded-[8px] transition disabled:cursor-not-allowed text-[#F0F0F0] font-semibold text-[16px] leading-[21px] py-[8px] bg-[#202332] hover:bg-[#343848]">
              Withdraw
            </button>
          </div>
        </ModalHeader>
        <ModalBody px="0" overflow="auto">
          <div className="flex flex-col gap-[14px] xl:gap-[18px]">
            {modalLinks.map(link => (
              <Link
                key={link.id}
                to={link.href}
                className="text-[18px] sm:text-[20px] leading-[21px] sm:leading-[24px] hover:text-[#8f8f9f] text-[#F0F0F0] font-tt-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[14px] xl:gap-[18px] mt-[14px] sm:mt-[24px] pt-[14px] sm:pt-[24px] border-t border-[#424659] capitalize">
            {modalLinksSup.map(link => (
              <Link
                key={link.id}
                to={link.href}
                className="text-[18px] sm:text-[20px] leading-[21px] sm:leading-[24px] text-[#8f8f9f] hover:text-[#F0F0F0] font-tt-light"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[14px] xl:gap-[18px] mt-[14px] sm:mt-[24px] pt-[14px] sm:pt-[24px] border-t border-[#424659] capitalize">
            <span
              className="text-[18px] sm:text-[20px] leading-[21px] sm:leading-[24px] text-[#ff879b] font-tt-medium cursor-pointer"
              onClick={onClickLogout}
            >
              Logout
            </span>
          </div>
        </ModalBody>
        <ModalFooter px="0" pb="30px">
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-x-[8px] mb-[16px]">
              <img src={adult} alt="18+" />
              <p className="text-[11px] leading-[14px] font-normal text-[#8f8f9f]">
                To discuss your gambling or the gambling of someone else,
                contact
                <Link
                  to="//ncpgambling.org"
                  target="_blank"
                  rel="nofollow"
                  className="mx-[4px] underline"
                >
                  ncpgambling.org
                </Link>
                and visit our
                <Link
                  to="https://rivalfantasy.com/responsible-gaming-policy"
                  className="ml-[4px] underline"
                >
                  Responsible Gambling page
                </Link>
              </p>
            </div>

            <div className="flex flex-row items-center gap-[16px]">
              {modalSocialLinks.map(icons => (
                <Link
                  key={icons.id}
                  to={icons.href}
                  className="w-[32px] h-[32px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
                >
                  <img src={icons.url} />
                </Link>
              ))}
            </div>
            <div className="flex flex-row items-center gap-[12px] mt-[16px]">
              <Link
                to="https://rivalfantasy.com/terms-of-use"
                className="text-[16px] text-[#8f8f9f] hover:text-[#F0F0F0] font-tt-light"
              >
                Terms of use
              </Link>
              <Link
                to="https://rivalfantasy.com/privacy-policy"
                className="text-[16px] text-[#8f8f9f] hover:text-[#F0F0F0] font-tt-light"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HeaderModal