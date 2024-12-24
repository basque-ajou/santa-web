"use client";

import { useState } from "react";

import { ChatRoom } from "@/app/components/ChatRoom";
import { ChatBottom } from "@/app/components/ChatBottom";

const Chat = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={"flex min-h-full w-full flex-col items-center gap-4"}>
      <ChatRoom isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      <ChatBottom setIsSubmitted={setIsSubmitted} />
    </div>
  );
};
export default Chat;
