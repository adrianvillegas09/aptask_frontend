import { React, useState } from "react";

export default function Command({ onHandleSubmit }) {
  const [command, setCommand] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCommand("");
    onHandleSubmit(command);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto mt-7 flex w-[80%] items-center rounded-full border hover:shadow-md border-slate-50">
        <input
          type="text"
          className="w-full bg-transparent rounded-full py-[14px] pl-5 outline-none text-base text-white"
          placeholder="You can ask me anything"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <div className="pr-5">
          <img
            src="/img/send-svgrepo-com.png"
            className="w-[24px] h-[24px]"
            alt="send_icon"
          />
        </div>
      </div>
    </form>
  );
}
