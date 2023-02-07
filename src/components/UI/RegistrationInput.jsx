import React from "react";

const IdentifyInput = React.forwardRef((props, ref) => {
  return (
    <input
      className="px-3 w-full h-10 text-white border border-[#8F8F9F] outline-none bg-transparent rounded-xl placeholder:text-[#8F8F9F] placeholder:text-base placeholder:leading-[19px]"
      {...props}
      ref={ref}
    />
  );
});

export default IdentifyInput;
