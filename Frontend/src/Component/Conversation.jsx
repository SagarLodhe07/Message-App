import React from "react";

const Conversation = () => {
  return (
    <div className="w-full h-22 rounded-lg flex mt-2 items-center hover:bg-slate-200 transition-all ease-linear">
      <div className="p-4 ">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="rounded-full size-14 border-2 border-blue-600 "
          alt="user_Profile"
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Jon Doe</h1>
        <p className="text-md">Message</p>
        <p className="text-xs ">12:06Am</p>
      </div>
    </div>
  );
};

export default Conversation;
