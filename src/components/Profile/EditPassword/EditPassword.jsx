import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GET_PROFILE } from "../../../apollo/Profile/getProfile";
import { PASSWORD_EDIT } from "../../../apollo/Profile/passwordEdit";
import { UpdatePasswordSchema } from "../../../services/Schema/ChangePasswordSchema";
import ProfileInput from "../../UI/ProfileInput";

const EditPassword = () => {
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [passwordToEdit, { client }] = useMutation(PASSWORD_EDIT, {
    context: { uri: "https://api.develop.rivalfantasy.com/auth/graphql" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdatePasswordSchema),
  });

  const onSubmit = async data => {
    passwordToEdit({
      variables: { input: { newPassword: data.password } },
    });
    setPasswordEdit(false);
    await client.refetchQueries({
      include: [GET_PROFILE],
    });
  };

  return (
    <>
      {!passwordEdit ? (
        <div className="flex flex-col">
          <p className="text-[#F0F0F0] text-[14px] leading-[18px] font-normal">
            Password
          </p>
          <div className="flex flex-row items-center justify-between border-b border-[#424659] min-h-[46px]">
            <p className="text-[#8f8f9f] text-[16px] leading-[12px] font-normal">
              {[...Array(18)].map((_, ind) => (
                <span key={ind}>*</span>
              ))}
            </p>
            <button
              className="uppercase text-center rounded-[8px] transition disabled:cursor-not-allowed text-[14px] leading-[17px] font-semibold text-[#00d8be]"
              onClick={() => setPasswordEdit(!passwordEdit)}
            >
              Change Password
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="password"
            className="flex flex-col text-[#F0F0F0] mb-[10px] text-sm leading-[17px]"
          >
            Password
          </label>
          <div className="relative mb-[5px]">
            <ProfileInput
              {...register("password")}
              id="password"
              type="text"
              placeholder="Your password"
              required
            />
          </div>
          <p className="text-red-500">{errors.password?.message}</p>
          <div className="flex flex-col sm:flex-row gap-[12px] mt-[25px]">
            <button
              className="uppercase text-center rounded-[8px] transition disabled:cursor-not-allowed  text-[#f0f0f0] text-[16px] leading-[21px] font-semibold sm:max-w-[196px] w-full py-[11px] bg-[#424659] hover:bg-[#343848]"
              type="reset"
              onClick={() => setPasswordEdit(!passwordEdit)}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled=""
              className="uppercase text-center rounded-[4px] transition disabled:cursor-not-allowed  text-[#141422] text-[16px] leading-[21px] font-semibold bg-[#00d8be] hover:bg-[#0fb0a1] sm:max-w-[196px] w-full py-[11px]"
            >
              update
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditPassword;
