import React from "react";

const ProfileInput = React.forwardRef((props, ref) => {
  return (
    <input
      className="border-[#424659] w-full bg-transparent mb-[5px] border-b outline-none border rounded-[8px] text-[16px] leading-[19px] placeholder:text-primary-white placeholder:opacity-30 text-[#f0f0f0] py-[12px] px-[16px]"
      {...props}
      ref={ref}
    />
  );
});

export default ProfileInput;
