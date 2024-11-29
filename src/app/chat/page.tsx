"use client";
import { useState, useEffect } from "react";
import { ChatRoom } from "@/app/components/ChatRoom";
import { ChatBottom } from "@/app/components/ChatBottom";

const Chat = () => {
  // comment 작성시
  const [gift, setGift] = useState("");
  const [prompt, setPrompt] = useState("");

  // comment 작성 성공 시 산타 말 반환 값
  const [santaSays, setSantaSays] = useState("");

  const [submittedGift, setSubmittedGift] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");

  return (
    <div
      className={
        "flex h-screen min-w-full flex-col justify-center bg-[#FBFFC9]"
      }
    >
      <ChatRoom
        submittedGift={submittedGift}
        submittedPrompt={submittedPrompt}
        santaSays={santaSays}
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
