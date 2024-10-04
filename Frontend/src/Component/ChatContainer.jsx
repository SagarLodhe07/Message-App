import React from "react";
import SearchBar from "./SearchBar";
import Conversation from "./Conversation";

const ChatContainer = () => {
  return (
    <div className="w-[430px] h-screen flex flex-col">
      <SearchBar />
      <div className="overflow-y-auto flex-grow h-full">
         <Conversation/>
         <Conversation/>
         <Conversation/>
         <Conversation/>
         <Conversation/>
         <Conversation/>
         <Conversation/>
      </div>
    </div>
  );
};

export default ChatContainer;
