import React from "react";
import { useEffect, useState } from "react";

import Command from "./chat/command";
import Messages from "./chat/message";
import Sidebar from "./chat/sidebar";
import Chat_spinner from "./landing/chat_spinner";

export default function Chatbot() {
  let [messages, setMessages] = useState([]);
  let [running, setRunning] = useState(false);
  let [modeltype, setModeltype] = useState("falcon");
  let messageRef = null;

  useEffect(() => {
    messageRef.scrollTop = messageRef.scrollHeight;
  }, [messages]);

  const sendMessage = async (message) => {
    setRunning(true);
    let apiUrl = "";

    if (modeltype == "falcon") apiUrl = "http://184.105.6.211:8000/api/query";
    else if (modeltype == "llama")
      apiUrl = "http://184.105.6.211:6000/api/query";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message, model_type: modeltype }),
    };

    messages = [...messages, { username: "Us", chatdata: message }];
    setMessages(messages);

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    setMessages([...messages, { username: "Cb", chatdata: data.message }]);

    setRunning(false);
  };

  const setModel = (model) => {
    setModeltype(model);
    setMessages([]);
  };

  return (
    <dh-component>
      <div className="flex flex-no-wrap h-screen">
        <Sidebar setModel={setModel} />
        <div className="w-full py-10 bg-gray-700 h-screen">
          <div
            className="w-full h-full border-2 border-none px-8"
            ref={(el) => {
              messageRef = el;
            }}
            style={{
              maxHeight: "calc(100vh - 130px)",
              overflowY: "scroll",
              scrollbarWidth: "thin",
            }}
          >
            <Messages messages={messages} />
            {running ? <Chat_spinner /> : ""}
          </div>
          <Command onHandleSubmit={sendMessage} />
        </div>
      </div>
    </dh-component>
  );
}
