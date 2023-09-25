import React from "react";
import { ulid } from "ulid";

export default function Messages({ messages }) {
  let colorStyle = "";
  return messages.map((message, key) => {
    if (message["username"] == "CB")
      colorStyle =
        "w-[32px] h-[32px] grid place-content-center text-[18px] bg-[orange] text-gray-900 rounded-full";
    else
      colorStyle =
        "w-[32px] h-[32px] grid place-content-center text-[18px] bg-gray-200 text-gray-900 rounded-full";
    return (
      <div
        key={ulid()}
        className="relative w-[834px] mx-auto text-gray-100 text-base"
        id="msg-demo"
      >
        <div className="grid w-full text-base gap-y-6 p-4">
          <div className="flex gap-[28px]">
            <div className={colorStyle}>{message["username"]}</div>
            <div className="bg-blue-50 flex items-center justify-center">
              {message["chatdata"]}
            </div>
          </div>
        </div>
      </div>
    );
  });
}
