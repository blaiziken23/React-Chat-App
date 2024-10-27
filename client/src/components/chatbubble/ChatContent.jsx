import React from "react";

const ChatContent = ({ username, message, time }) => {
  return (
    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-md">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {username || "Guest"}
        </span>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {time || "11:46"}
        </span>
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
        {message || "Hello"}
      </p>
      {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span> */}
    </div>
  );
};

export default ChatContent;
