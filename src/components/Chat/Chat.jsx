import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MessengerService from "../../services/MessengerService";
import { MessageSchema } from "../Schema/MessageScheme";
import ChatTabs from "./ChatTabs/ChatTabs";
import Message from "./Message/Message";

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState({});
  const nav = useLocation();
  const path = nav.pathname.split("/").reverse()[0];
  const chatBoxRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(MessageSchema),
  });

  useEffect(() => {
    if (localStorage.getItem("token") !== undefined) {
      MessengerService.init();
    } else {
      MessengerService.destruct();
    }
  }, []);

  useEffect(() => {
    MessengerService.socket.on("DEFAULT_GROUP_CHATS", ({ data }) => {
      setIsLoading(false);
      setChats(data);
      data.forEach(chat => {
        setMessages(prev => ({ ...prev, [chat.uuid]: [] }));
      });
    });
  }, []);

  useEffect(() => {
    MessengerService.socket.on("NEW_MESSAGE", ({ data }) => {
      const chatId = data.chatUuid;
      setMessages(prev => ({
        ...prev,
        [chatId]: [...prev[chatId], data],
      }));
    });
  }, []);

  useEffect(() => {
    MessengerService.socket.emit(
      "GET_CHAT_HISTORY",
      {
        chatUuid: path,
        limit: 10,
        offset: 0,
      },
      ({ data }) => {
        const uuid = data.map(item => item.chatUuid)[0];

        const sortedData = data.reverse();
        setMessages(prev => ({
          ...prev,
          [uuid]: [...prev[uuid], ...sortedData],
        }));
      }
    );
  }, [path]);

  const onSubmit = ({ message }) => {
    const chatId = chats.find(item => item.uuid === path);
    MessengerService.socket.emit("SEND_MESSAGE", {
      uuid: uuidv4(),
      chatUuid: chatId.uuid,
      text: message,
    });

    reset();
  };

  return (
    <div className="container max-w-[1196px] pt-[30px] sm:pt-[40px] lg:pt-[80px] pb-[90px]">
      <div className="w-[800px] mx-auto">
        <h2 className="text-[#F0F0F0]  text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-[500]  mb-[16px]">
          Chats
        </h2>
        {!isLoading ? (
          <>
            <ChatTabs chats={chats} path={path} />
            {path !== "chat" ? (
              <>
                <Message
                  isLoading={isLoading}
                  messages={messages}
                  path={path}
                  chatBoxRef={chatBoxRef}
                />
                <form
                  className="flex justify-center h-[50px] border border-gray-400 rounded-lg"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register("message")}
                    className="px-5 text-2xl text-white bg-transparent w-full h-[50px] outline-none"
                    type="text"
                    name="message"
                    placeholder="What do you want to say?"
                    autoComplete="off"
                    required
                  />
                  <p className="text-red-500">{errors.message?.message}</p>
                  <input
                    className="bg-slate-400 rounded-lg cursor-pointer"
                    type="submit"
                    value="Send a message"
                  />
                </form>
              </>
            ) : (
              <div className="bg-red-500">Select chat</div>
            )}
          </>
        ) : (
          <div className="bg-red-500">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
