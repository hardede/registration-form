import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_PROFILE } from "../../apollo/getProfile";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [getProfile, { data }] = useLazyQuery(GET_PROFILE, {
    context: { clientName: "profile" },
  });

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (data) {
      setUserProfile(data.getProfile);
    }
  }, [data]);

  console.log("🚀 ~ file: Profile.jsx:7 ~ Profile ~ userProfile", userProfile.email);

  return <div className="bg-red-500"></div>;
};

export default Profile;
