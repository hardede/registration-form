import React from "react";
import { Link } from "react-router-dom";
import { formIcons } from "../../constants/formIcons";

const FormFooter = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center text-center text-[#F0F0F0] font-tt-regular text-base leading-[19px] before:content-[''] before:block before:w-full before:h-0.5 before:bg-[#424659] after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#424659] mb-5">
        <p className="whitespace-nowrap px-4">or use</p>
      </div>
      <div className="flex justify-between text-center items-center">
        {formIcons.map(icon => (
          <Link to="/" key={icon.id}>
            <div className="px-[63px] py-2.5 border border-[#8F8F9F] rounded-xl">
              <img src={icon.url} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FormFooter;
