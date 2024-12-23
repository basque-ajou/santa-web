"use client";
import { ChatRoom } from "@/app/components/ChatRoom";
import { ChatList } from "@/app/components/ChatList";
import { ChatBottom } from "@/app/components/ChatBottom";
import { useState } from "react";
import { Top } from "@/app/components/ChatRoom/Top";

const Chat = () => {
  const [gift, setGift] = useState("");
  const [prompt, setPrompt] = useState("");
  const [submittedGift, setSubmittedGift] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [santaSays, setSantaSays] = useState("");

  const nickName = localStorage.getItem("nickName");

  return (
    <div
      className={
        "min-w-screen-xl mx-auto flex min-h-screen flex-col items-center gap-4 bg-[#FBFFC9] px-10"
      }
    >
      <Top nickName={nickName} />

      <ChatRoom
        submittedGift={submittedGift}
        setSubmittedGift={setSubmittedGift}
        submittedPrompt={submittedPrompt}
        santaSays={santaSays}
        nickName={nickName}
      />
      <ChatBottom
        gift={gift}
        setGift={setGift}
        prompt={prompt}
        setPrompt={setPrompt}
        setSubmittedGift={setSubmittedGift}
        setSubmittedPrompt={setSubmittedPrompt}
        setSantaSays={setSantaSays}
      />
    </div>
  );
};
export default Chat;
