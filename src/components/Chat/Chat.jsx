import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useRxData } from "rxdb-hooks";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../services";
import MessengerService from "../../services/MessengerService";
import { MessageSchema } from "../../services/Schema/MessageScheme";
import ChatTabs from "./ChatTabs/ChatTabs";
import Message from "./Message/Message";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState();
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

  const { result: chats, isFetching } = useRxData("chat", collection =>
    collection.find()
  );

  const { result: messages, isFetching: isFetchingMessages } = useRxData(
    "message",
    collection =>
      collection.find({
        selector: {
          chatUuid: selectedChat || "not-set-chat",
        },
        sort: [
          {
            createdAt: "asc",
          },
        ],
      })
  );

  useEffect(() => {
    if (path !== "chat") {
      setSelectedChat(path);
    }
  }, [path]);

  useEffect(() => {
    if (selectedChat) {
      MessengerService.socket.emit(
        "GET_CHAT_HISTORY",
        {
          chatUuid: selectedChat,
          limit: 10,
          offset: 0,
        },
        ({ data }) => {
          db.rx.message.bulkInsert(data);
        }
      );
    }
  }, [selectedChat]);

  if (isFetching) {
    return (
      <div className="h-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#00D8BE]"></div>
      </div>
    );
  }

  const onSubmit = ({ message }) => {
    MessengerService.socket.emit("SEND_MESSAGE", {
      uuid: uuidv4(),
      chatUuid: selectedChat,
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
        <>
          <ChatTabs
            chats={chats}
            path={path}
            setSelectedChat={setSelectedChat}
          />

          {!!selectedChat && !isFetchingMessages && (
            <Message messages={messages} path={path} chatBoxRef={chatBoxRef} />
          )}
          {!selectedChat && <div className="bg-red-500">Select a chat</div>}
          {!!selectedChat && (
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
          )}
        </>
      </div>
    </div>
  );
};

export default Chat;
