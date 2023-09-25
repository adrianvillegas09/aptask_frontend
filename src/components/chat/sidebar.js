import React from "react";

function Sidebar({ setModel }) {
  return (
    <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex ">
      <div className="px-8">
        <div className="h-16 w-full flex items-center">
          <button
            className="text-emerald-500 background-transparent font-bold uppercase px-8 py-3 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <img src="/img/logo.png" />
          </button>
        </div>
      </div>
      <div className="px-2 border-t border-gray-700">
        <div className="w-full flex items-center justify-center p-2">
          <label class="select">
            <select
              onChange={(e) => setModel(e.target.value)}
              defaultValue={"falcon"}
            >
              <option value="llama">Llama2-7b model</option>
              <option value="falcon">Falcon-7b model</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
