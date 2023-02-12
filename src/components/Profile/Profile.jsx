import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_PROFILE } from "../../apollo/Profile/getProfile";
import GameNotification from "./EditEmailNotification/GameNotification";
import TransactionNotification from "./EditEmailNotification/TransactionNotification";
import UsernameEdit from "./EditUsername/UsernameEdit";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [gameNotice, setGameNotice] = useState();
  const [transactionNotice, setTransactionNotice] = useState();

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

  useEffect(() => {
    if (userProfile.preferences) {
      setGameNotice(userProfile.preferences.gameEmailNotifications);
      setTransactionNotice(
        userProfile.preferences.transactionsEmailNotifications
      );
    }
  }, [userProfile]);

  return (
    <div className="container max-w-[1196px] pt-[30px] sm:pt-[40px] lg:pt-[80px] pb-[90px]">
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[28px] sm:gap-[32px] lg:gap-[66px]">
        <div className="flex flex-col w-full gap-y-[30px] order-2 lg:order-1">
          <div>
            <h2 className="text-[#F0F0F0]  text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-[500]  mb-[16px]">
              Personal
            </h2>
            <div className="bg-[#1a1c2a] px-[12px] py-[16px] sm:p-[24px] rounded-[8px]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col">
                  <p className="text-[#F0F0F0] text-[14px] leading-[18px] font-normal">
                    Verification Status
                  </p>
                  <div className="flex flex-row items-center justify-between border-b border-[#424659] min-h-[46px]">
                    <p className="text-[#ff879b] group-hover:text-[#00d8be] text-[16px] leading-[18px] font-normal">
                      Not completed
                    </p>
                  </div>
                </div>
                <UsernameEdit username={userProfile.username} />
                <div className="flex flex-col">
                  <p className="text-[#F0F0F0]   text-[14px] leading-[18px] font-normal">
                    Email
                  </p>
                  <div className="flex flex-row items-center justify-between border-b border-[#424659] min-h-[46px]">
                    <p className="text-[#8f8f9f] text-[16px] leading-[12px] font-normal">
                      {userProfile.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[#F0F0F0]  text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-[500]  mb-[16px]">
              Notifications
            </h2>
            <div className="bg-[#1a1c2a] px-[12px] py-[16px] sm:p-[24px] rounded-[8px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex flex-row gap-[12px] self-end mb-[12px] translate-x-[6px]">
                  <p className="text-[#8f8f9f] text-[14px] leading-[16px] font-normal">
                    Email
                  </p>
                </div>
                <GameNotification
                  gameNotice={gameNotice}
                  setGameNotice={setGameNotice}
                />
                <TransactionNotification
                  transactionNotice={transactionNotice}
                  setTransactionNotice={setTransactionNotice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] order-1 lg:order-2">
          <div className="bg-cover bg-no-repeat bg-center bg-uploadPhoto h-[100px] lg:h-[172px] w-[100px] lg:w-[172px] rounded-full"></div>
          <div className="text-[14px] leading-[18px] font-semibold uppercase text-[#00D8BE] cursor-pointer text-center">
            upload photo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
