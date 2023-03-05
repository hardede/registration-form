import React from "react";
import { Link } from "react-router-dom";

const ChatTabs = ({ chats, path, setSelectedChat }) => {
  return (
    <div className="flex">
      {chats.map(chat => {
        const chatActive = path === `${chat.uuid}`;

        const chatActiveClass = chatActive
          ? "w-1/3 text-center text-lg font-bold text-[#F0F0F0] bg-slate-500 rounded-lg"
          : "w-1/3 text-center text-lg text-blue-500 bg-[#1a1c2a] rounded-lg";

        return (
          <Link
            to={`/me/chat/${chat.uuid}`}
            key={chat.uuid}
            className={chatActiveClass}
            onClick={() => setSelectedChat(chat.uuid)}
          >
            {chat.name}
          </Link>
        );
      })}
    </div>
  );
};

export default ChatTabs;
