const ChatSchema = {
  title: "ChatSchema",
  version: 0,
  primaryKey: "uuid",
  type: "object",
  properties: {
    uuid: {
      type: "string",
      maxLength: 36,
    },
    name: {
      type: "string",
      maxLength: 100,
    },
    status: {
      type: "string",
    },
    type: {
      type: "string",
    },
    createdAt: {
      type: "string",
    },
    updatedAt: {
      type: "string",
    },
  },
  required: ["name", "status", "type", "createdAt"],
  indexes: ["name"],
};

export default ChatSchema;
