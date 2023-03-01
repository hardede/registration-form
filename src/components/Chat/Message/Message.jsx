import React, { useEffect, useState } from "react";

const Message = ({ isLoading, messages, path }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    setChatMessages(messages[path]);
  }, [messages, path]);

  return (
    <div className="flex flex-col gap-[20px] bg-[#1a1c2a] px-[12px] py-[16px] sm:p-[24px] rounded-[8px] h-[500px]">
      {!isLoading ? (
        <>
          {chatMessages.map(message => (
            <div
              key={message.uuid}
              className="max-w-max flex flex-col gap-[4px] w-full flex-start"
            >
              <span className="text-white">{message.sender.username}</span>
              <div key={message.uuid} className="text-white">
                {message.text}
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Message;
