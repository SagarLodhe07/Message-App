import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Conversation from "./Conversation";
import ChatContainer from "./ChatContainer";

const SearchBar = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl p-2 font-semibold  text-blue-600">Chats</h1>

     <div className="flex items-center w-[340px] ">
     <input
        type="text"
        placeholder="Seach Chats"
        className="h-11 w-full rounded-full p-4 mx-2 focus:outline-none border-gray-500 border text-gray-500"
      />

      <button className="p-2 rounded-full transition-all ease-out hover:bg-gray-300">
        <FaMagnifyingGlass size={20} fill="#2563eb" />
      </button>
     </div>

        <div>
        </div>

    </div>
  );
};

export default SearchBar;
