import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const PrivateLayout = () => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col justify-between min-h-screen bg-bg-register bg-cover bg-center">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PrivateLayout