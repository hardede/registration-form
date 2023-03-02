import io from "socket.io-client";

const activitySocket = {
  socket: io("https://api.develop.rivalfantasy.com", {
    path: "/profile/socket.io",
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

      this.socket.on("ACTIVITY_PING", () => {
        this.socket.emit("ACTIVITY_PONG");
      });
    }
  },
  destruct: function () {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  },
};

export default activitySocket;
