import React from "react";
import FormFooter from "../Auth/FormFooter/FormFooter";
import Tabs from "../Auth/Tabs/Tabs";

const FormLayout = ({ children }) => {
  return (
    <div>
      <Tabs />
      {children}
      <FormFooter />
    </div>
  );
};

export default FormLayout;
