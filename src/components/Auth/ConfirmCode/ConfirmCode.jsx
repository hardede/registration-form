import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { default as Otp } from "react18-input-otp";
import { CONFIRM_EMAIL } from "../../../apollo/Auth/ConfirmEmail";
import FormLayout from "../../Layout/FormLayout";

const ConfirmCode = ({ email, strategy }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [confirmEmail, { data: JWTTokens }] = useMutation(CONFIRM_EMAIL, {
    context: { uri: "https://api.develop.rivalfantasy.com/auth/graphql" },
  });

  const { handleSubmit, reset } = useForm({
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

  useEffect(() => {
    if (JWTTokens) {
      localStorage.setItem("token", JWTTokens.confirmEmail.accessToken);
      navigate("/me/profile");
    }
  }, [JWTTokens, navigate]);

  return (
    <div className="mt-[80px] flex justify-center">
      <div className="form-confirm">
        <FormLayout>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-[#F0F0F0] text-xl leading-[26px] text-center">
              We've sent a 5-digit code to {email}.
              <br /> Please enter the code below
            </div>
            <div>
              <p>Verification code</p>
              <Otp
                value={otp}
                onChange={handleChange}
                numInputs={5}
                containerStyle="justify-center"
                inputStyle={{
                  margin: "0 5px",
                  border: "2px solid #424659",
                  borderRadius: "8px",
                  width: "60px",
                  height: "60px",
                  background: "transparent",
                  color: "#F0F0F0",
                  outline: "0",
                  fontSize: "42px",
                  lineHeight: "50px",
                }}
                focusStyle={{ border: "2px solid #00D8BE" }}
              />
            </div>
            <input
              type="submit"
              value="Confirm"
              className="form-confirm-btn mt-4"
            />
          </form>
        </FormLayout>
      </div>
    </div>
  );
};

export default ConfirmCode;
