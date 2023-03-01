import io from "socket.io-client";

const messengerSocket = {
  socket: io("https://api.develop.rivalfantasy.com", {
    path: "/messenger/socket.io",
    transports: ['websocket'],
    auth: {
      token: localStorage.getItem("token"),
    },
    autoConnect: false,
  }),

  init: function () {
    if (!this.socket.connected) {
      this.socket.connect();

      this.socket.onAny((eventName, ...args) => {
        console.warn(eventName, args);
      });
    }
  },
  destruct: function () {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  },
};

export default messengerSocket;
