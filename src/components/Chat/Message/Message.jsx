import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_PROFILE } from "../../../apollo/Profile/getProfile";

const Message = ({ messages, chatBoxRef }) => {
  const [userProfile, setUserProfile] = useState({});
  const [isMessagesLoading, setIsMessagesLoafing] = useState(true);
  const [getProfile, { data }] = useLazyQuery(GET_PROFILE, {
    context: { uri: "https://api.develop.rivalfantasy.com/profile/graphql" },
  });

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (data) {
      setUserProfile(data.getProfile);
      setIsMessagesLoafing(false);
    }
  }, [data]);

  useEffect(() => {
    if (!isMessagesLoading) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
    chatBoxRef.current.scrollTop += chatBoxRef.current.scrollHeight;
  }, [chatBoxRef, messages, isMessagesLoading]);

  return (
    <div
      className="w-full text-lg bg-[#1a1c2a] px-[12px] py-[16px] sm:p-[24px] rounded-[8px] h-[500px] overflow-scroll"
      ref={chatBoxRef}
    >
      {!isMessagesLoading ? (
        <div className="flex flex-col gap-[20px] w-full">
          <>
            {messages?.map(message => (
              <div
                key={message.uuid}
                className={
                  message.sender.userUuid === userProfile.userUuid
                    ? "flex flex-col items-end text-[#00D8BE]"
                    : "flex flex-col items-start text-white"
                }
              >
                <div className="max-w-max bg-slate-500 rounded-lg px-3 py-1 ">
                  <div key={message.uuid} className="">
                    {message.text}
                  </div>
                  <div className="text-sm">
                    <span className="pr-2">{message.sender?.username}</span>
                    <span>
                      {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#00D8BE]"></div>
        </div>
      )}
    </div>
  );
};

export default Message;
