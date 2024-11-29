"use client";
import { ChatRoom } from "@/app/components/ChatRoom";
import { ChatList } from "@/app/components/ChatList";

const Chat = () => {
  // comment 작성시

  // comment 작성 성공 시 산타 말 반환 값

  return (
    <div
      className={"min-w-screen-xl mx-auto flex min-h-screen bg-[#FBFFC9] px-2"}
    >
      <ChatList />
      <ChatRoom />
    </div>
  );
};
export default Chat;
