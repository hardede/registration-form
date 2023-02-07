import { useMutation } from "@apollo/client";
import { FormControl, FormLabel, Spinner, Switch } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LOGIN_USER_MAGIC_LINK } from "../../../apollo/Auth/Identify";
import FormLayout from "../../Layout/FormLayout";
import { MagicLinkSchema } from "../../Schema/MagicLinkSchema";
import IdentifyInput from "../../UI/RegistrationInput";
import ConfirmCode from "../ConfirmCode/ConfirmCode";
import Login from "../Login/Login";

const MagicLink = () => {
  const [codeActive, setCodeActive] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState("");
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
    setEmail(data.email);
    reset();
    setConfirm(true);
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h2>Error...</h2>;
  } 

  return (
    <>
      {codeActive ? (
        confirm ? (
          <ConfirmCode email={email} strategy="MAGIC_LINK" />
        ) : (
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
                  <FormControl className="my-6 flex items-center">
                    <Switch
                      id="log-with-code"
                      isChecked={codeActive}
                      onChange={() => setCodeActive(!codeActive)}
                    />
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
        )
      ) : (
        <Login />
      )}
    </>
  );
};

export default MagicLink;
