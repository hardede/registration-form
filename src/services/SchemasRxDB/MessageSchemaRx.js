const MessageSchema = {
  title: "MessageSchema",
  version: 0,
  primaryKey: "uuid",
  type: "object",
  properties: {
    uuid: {
      type: "string",
      maxLength: 36,
    },
    chatUuid: {
      ref: "chat",
      type: "string",
      maxLength: 36,
    },
    senderUuid: {
      type: "string",
      maxLength: 36,
    },
    sender: {
      firstName: "string",
      lastName: "string",
      userUuid: "string",
      username: "string",
    },
    text: {
      type: "string",
    },
    createdAt: {
      type: "string",
    },
  },
  required: ["chatUuid", "text", "createdAt"],
  indexes: ["chatUuid"],
};

export default MessageSchema;
