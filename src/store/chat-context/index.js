import React from "react";

export const ChatContext = React.createContext({
  chat: { channel: "", user: "" },
  changeChat: () => {},
});
