import { useMutation } from "@apollo/client";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { UPLOAD_PHOTO } from "../../../apollo/Profile/uploadPhoto";

const UploadPhoto = ({ isOpen, onClose }) => {
  const finalRef = useRef(null);
  const [ImageSelected, setImageSelected] = useState(null);
  // console.log(
  //   "🚀 ~ file: UploadPhoto.jsx:17 ~ UploadPhoto ~ ImageSelected",
  //   ImageSelected
  // );
  const [uploadUserPhoto, { data: photo }] = useMutation(UPLOAD_PHOTO, {
    // context: { uri: "https://api.develop.rivalfantasy.com/profile/graphql" },
  });
  // console.log("🚀 ~ file: UploadPhoto.jsx:21 ~ UploadPhoto ~ photo", photo);

  const onClickSave = () => {
    uploadUserPhoto({
      variables: { file: ImageSelected },
    });
  };

  return (
    <Modal
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      id="uploadmodal"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          px="0"
          display="flex"
          bg="#1a1c2a"
          justifyContent="space-between"
          className="!px-[16px] !sm:px-[36px] !py-[8px]"
        >
          <p className="text-[#f0f0f0]  text-[25px] leading-[30px] font-medium">
            Upload avatar
          </p>
          <button
            type="button"
            aria-label="Close"
            className="w-[32px] h-[32px] bg-[#343848] !rounded-full z-[20]  focus:!shadow-none"
            onClick={onClose}
          >
            <CloseIcon color="#f0f0f0" w="12px" h="12px" />
          </button>
        </ModalHeader>
        <ModalBody
          px="0"
          overflow="auto"
          className="!px-[16px] flex-1 sm:!px-[36px] sm:!py-[5px] !overflow-y-scroll no-scrollbar"
        >
          <div className="overflow-hidden rounded-[8px] mt-[30px]">
            <div>
              <div className="input-container">
                <input
                  id="avatar_loader"
                  type="file"
                  className="input"
                  accept="image/jpeg,image/png"
                  onChange={e => setImageSelected(e.target.files[0])}
                />
                <label className="label" htmlFor="avatar_loader">
                  Choose a file
                </label>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter px="1.5rem" pb="30px">
          <div className="flex flex-col justify-center sm:flex-row w-full gap-[12px]">
            <button
              disabled=""
              className="text-center rounded-[8px] transition disabled:cursor-not-allowed disabled:bg-[#343848] text-[#141422] text-[16px] leading-[21px] font-semibold bg-[#00d8be] hover:bg-[#0fb0a1] w-full sm:w-1/2 py-[11px]"
              onClick={onClickSave}
            >
              Save
            </button>
            <button
              className="text-center rounded-[8px] transition disabled:cursor-not-allowed text-[#f0f0f0] text-[16px] leading-[21px] font-semibold w-full sm:w-1/2 py-[11px] bg-[#343848]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UploadPhoto;
