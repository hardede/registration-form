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

  return <div className="mt-[100px] bg-red-500">{userProfile.email}</div>;
};

export default Profile;
