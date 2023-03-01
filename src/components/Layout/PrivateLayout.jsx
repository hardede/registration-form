import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ActivityService from "../../services/ActivityService";

const PrivateLayout = () => {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      ActivityService.init();
    } else {
      ActivityService.destruct();
    }
  }, []);

  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#141422]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
