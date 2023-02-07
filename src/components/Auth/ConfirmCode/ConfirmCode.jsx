import { useMutation } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { default as Otp } from "react18-input-otp";
import { CONFIRM_EMAIL } from "../../../apollo/Auth/ConfirmEmail";
import PopupBackButton from "../../../assets/PopupBackButton.svg";
import FormFooter from "../FormFooter/FormFooter";

const ConfirmCode = ({ email, strategy }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [confirmEmail, { loading, error }] = useMutation(CONFIRM_EMAIL);

  const {
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });
  

  const onSubmit = () => {
    confirmEmail({
      variables: { input: { email: email, code: otp, strategy: strategy } },
    });
    reset();
  };

  const handleChange = enteredOtp => {
    setOtp(enteredOtp);
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h2 className="text-red-500">Error...</h2>;
  } 

  return (
    <div className="mt-[140px] flex justify-center">
      <div className="form-confirm">
        <div onClick={() => navigate(-1)}>
          <img src={PopupBackButton} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-[#F0F0F0] text-xl leading-[26px] text-center">
            We've sent a 5-digit code to your email.
            <br /> Please enter the code below
          </div>
          <div>
            <p>Verification code</p>
            <Otp
              value={otp}
              onChange={handleChange}
              numInputs={5}
              containerStyle="justify-between"
              inputStyle={{
                border: "1px solid #424659",
                borderRadius: "8px",
                width: "80px",
                height: "41px",
                background: "transparent",
                color: "#F0F0F0",
                outline: "0",
                fontSize: "20px",
                lineHeight: "23px",
              }}
            />
          </div>
          <input
            type="submit"
            value="Confirm"
            className="bg-[#00D8BE] rounded-lg mt-4 w-full py-[10.5px] text-[#141422] hover:bg-opacity-80 disabled:bg-opacity-60 cursor-pointer"
          />
        </form>
        <FormFooter />
      </div>
    </div>
  );
};

export default ConfirmCode;
