import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { UsernameEditSchema } from "../../Schema/UpdateUsername";
import ProfileInput from "../../UI/ProfileInput";

const UsernameEdit = ({
  username,
  usernameEdit,
  onSubmit,
  onOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UsernameEditSchema),
  });

  return (
    <>
      {!usernameEdit ? (
        <div className="flex flex-col">
          <p className="text-[#F0F0F0] text-[14px] leading-[18px] font-normal">
            Username
          </p>
          <div className="flex flex-row items-center justify-between border-b border-[#424659] min-h-[46px]">
            <p className="text-[#8f8f9f] text-[16px] leading-[12px] font-normal">
              {username}
            </p>
            <button
              className="uppercase text-center rounded-[8px] transition disabled:cursor-not-allowed text-[14px] leading-[17px] font-semibold text-[#00d8be]"
              onClick={onOpen}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="username"
            className="flex flex-col text-[#F0F0F0] mb-[10px] text-sm leading-[17px]"
          >
            Your username
          </label>
          <div className="relative mb-[5px]">
            <ProfileInput
              {...register("username")}
              id="username"
              type="text"
              placeholder="Your username"
              required
            />
          </div>
          <p className="text-red-500">{errors.username?.message}</p>
          <div className="flex flex-col sm:flex-row gap-[12px] mt-[25px]">
            <button
              className="uppercase text-center rounded-[8px] transition disabled:cursor-not-allowed  text-[#f0f0f0] text-[16px] leading-[21px] font-semibold sm:max-w-[196px] w-full py-[11px] bg-[#424659] hover:bg-[#343848]"
              type="reset"
              onClick={onClose}
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

export default UsernameEdit;
