import io from "socket.io-client";
import { db } from "./";

const messengerSocket = {
  socket: io("https://api.develop.rivalfantasy.com", {
    path: "/messenger/socket.io",
    auth: {
      token: localStorage.getItem("token"),
    },
    autoConnect: false,
  }),

  init: function () {
    if (!this.socket.connected) {
      let token = localStorage.getItem("token");
      this.socket.connect();
      this.socket.auth.token = token;

      this.socket.on("DEFAULT_GROUP_CHATS", async ({ data }) => {
        // console.warn("DEFAULT_GROUP_CHATS => ", data);

        await db.rx.chat.bulkInsert(data);
      });

      this.socket.on("NEW_MESSAGE", async ({ data }) => {
        // console.warn("NEW_MESSAGE => ", data);

        await db.rx.message.insert(data);
      });

      // this.socket.onAny((eventName, ...args) => {
      //   console.warn(eventName, args);
      // });
    }
  },
  destruct: function () {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  },
};

export default messengerSocket;
