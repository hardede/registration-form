import { useLazyQuery, useMutation } from "@apollo/client";
import { Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GET_PROFILE } from "../../apollo/Profile/getProfile";
import { GAME_POP_UP } from "../../apollo/Profile/PopUps/gamePopUp";
import { TRANSACTION_POP_UP } from "../../apollo/Profile/PopUps/transactionsPopUp";
import { USERNAME_EDIT } from "../../apollo/Profile/usernameEdit";
import UsernameEdit from "./EditUsername/UsernameEdit";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [usernameEdit, setUsernameEdit] = useState(false);
  const [gamePopUps, setGamePopUps] = useState();
  const [transactionPopUps, setTransactionPopUps] = useState();

  const [getProfile, { data }] = useLazyQuery(GET_PROFILE, {
    context: { clientName: "profile" },
  });
  const [usernameToEdit] = useMutation(USERNAME_EDIT, {
    context: { clientName: "profile" },
    refetchQueries: () => [
      {
        query: GET_PROFILE,
      },
    ],
  });
  const [gamePopUp] = useMutation(GAME_POP_UP, {
    context: { clientName: "profile" },
    refetchQueries: () => [
      {
        query: GET_PROFILE,
      },
    ],
  });
  const [transactionPopUp] = useMutation(TRANSACTION_POP_UP, {
    context: { clientName: "profile" },
    refetchQueries: () => [
      {
        query: GET_PROFILE,
      },
    ],
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
      setGamePopUps(userProfile.preferences.gameEmailNotifications);
      setTransactionPopUps(
        userProfile.preferences.transactionsEmailNotifications
      );
    }
  }, [userProfile]);

  const onSubmit = data => {
    usernameToEdit({
      variables: { input: { username: data.username } },
    });
    setUsernameEdit(false);
  };

  const onClickGamePopUp = () => {
    setGamePopUps(!gamePopUps);
    gamePopUp({
      variables: {
        input: {
          gamePushNotifications: !gamePopUps,
          gameEmailNotifications: !gamePopUps,
        },
      },
    });
  };
  
  const onClickTransactionPopUp = () => {
    setTransactionPopUps(!transactionPopUps);
    transactionPopUp({
      variables: {
        input: {
          transactionsEmailNotifications: !transactionPopUps,
          transactionsPushNotifications: !transactionPopUps,
        },
      },
    });
  };

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
                <UsernameEdit
                  username={userProfile.username}
                  onSubmit={onSubmit}
                  usernameEdit={usernameEdit}
                  onOpen={() => setUsernameEdit(true)}
                  onClose={() => setUsernameEdit(false)}
                />
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
                <div className="flex flex-row items-center justify-between border-b border-[#424659] pb-[20px] mb-[20px]">
                  <p className="text-[#F0F0F0] text-[16px] leading-[20px] font-normal">
                    Game notifications
                  </p>
                  <div className="flex flex-row gap-[18px]">
                    <Checkbox
                      isChecked={gamePopUps}
                      size="lg"
                      onChange={onClickGamePopUp}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between border-b border-[#424659] pb-[20px] mb-[20px]">
                  <p className="text-[#F0F0F0] text-[16px] leading-[20px] font-normal">
                    Transaction notifications
                  </p>
                  <div className="flex flex-row gap-[18px]">
                    <Checkbox
                      isChecked={transactionPopUps}
                      size="lg"
                      onChange={onClickTransactionPopUp}
                    />
                  </div>
                </div>
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
