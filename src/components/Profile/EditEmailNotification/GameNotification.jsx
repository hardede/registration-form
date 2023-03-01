import { useMutation } from "@apollo/client";
import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { GET_PROFILE } from "../../../apollo/Profile/getProfile";
import { GAME_NOTICES } from "../../../apollo/Profile/Notice/gameNotices";

const GameNotification = ({ gameNotice, setGameNotice }) => {
  const [gameNotification, { client }] = useMutation(GAME_NOTICES, {
    context: { uri: "https://api.develop.rivalfantasy.com/profile/graphql" },
  });

  const onClickGameNotice = async () => {
    setGameNotice(!gameNotice);
    gameNotification({
      variables: {
        input: {
          gamePushNotifications: !gameNotice,
          gameEmailNotifications: !gameNotice,
        },
      },
    });
    await client.refetchQueries({
      include: [GET_PROFILE],
    });
  };

  return (
    <div className="flex flex-row items-center justify-between border-b border-[#424659] pb-[20px] mb-[20px]">
      <p className="text-[#F0F0F0] text-[16px] leading-[20px] font-normal">
        Game notifications
      </p>
      <div className="flex flex-row gap-[18px]">
        <Checkbox
          isChecked={gameNotice}
          size="lg"
          onChange={onClickGameNotice}
        />
      </div>
    </div>
  );
};

export default GameNotification;
