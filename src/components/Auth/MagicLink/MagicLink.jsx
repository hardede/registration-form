import { useMutation } from "@apollo/client";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_MAGIC_LINK } from "../../../apollo/Auth/Registration";
import FormLayout from "../../Layout/FormLayout";
import { MagicLinkSchema } from "../../Schema/MagicLinkSchema";
import IdentifyInput from "../../UI/RegistrationInput";

const MagicLink = () => {
  const [codeActive, setCodeActive] = useState(false);
  const navigate = useNavigate();
  const [loginUserMagicLink, { loading, error }] = useMutation(
    LOGIN_USER_MAGIC_LINK
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(MagicLinkSchema),
  });

  const onSubmit = data => {
    loginUserMagicLink({
      variables: { input: { email: data.email, strategy: "MAGIC_LINK" } },
    });
    reset();
    navigate("/confirm_code");
  };

  return (
    <div className="mt-[140px] flex justify-center">
      <div className="form-login">
        <FormLayout>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="emailReg"
              className="flex flex-col text-[#F0F0F0] mb-1 text-sm leading-[17px]"
            >
              Email address
            </label>
            <IdentifyInput
              {...register("email")}
              id="emailReg"
              type="email"
              placeholder="Enter your email"
              required
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <FormControl
              className="my-6 flex items-center"
              onClick={() => navigate("/login")}
            >
              <Switch id="log-with-code" isChecked />
              <FormLabel
                className="text-[#F0F0F0] ml-3"
                htmlFor="log-with-code"
                mb="0"
              >
                Log with code
              </FormLabel>
            </FormControl>
            <input
              type="submit"
              value="Log in"
              className="bg-[#00D8BE] rounded-lg  w-full py-[10.5px] text-[#141422] hover:bg-opacity-80 disabled:bg-opacity-60 cursor-pointer"
            />
          </form>
        </FormLayout>
      </div>
    </div>
  );
};

export default MagicLink;
