import React, { useEffect, useRef } from "react";

const Message = ({ isLoading, messages, path }) => {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollTop += chatBoxRef.current.scrollHeight;
  }, [messages, path]);

  return (
    <div
      className="flex flex-col gap-[20px] w-full max-h-[450px] overflow-scroll"
      ref={chatBoxRef}
    >
      {!isLoading ? (
        <>
          {messages[path].map(message => (
            <div
              key={message.uuid}
              className="max-w-max px-3 py-1 flex flex-col w-full items-start bg-slate-400 rounded-lg"
            >
              <div key={message.uuid} className="text-white">
                {message.text}
              </div>
              <span className="text-white text-sm">
                sender: {message.sender.username}
              </span>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Message;
