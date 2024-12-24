"use client";

import { useState, useEffect } from "react";

import { ChatRoom } from "@/app/components/ChatRoom";
import { ChatBottom } from "@/app/components/ChatBottom";
import { Top } from "@/app/components/Top";

import type { Message } from "@/types/chat/type";

const Chat = () => {
  const [gift, setGift] = useState("");
  const [prompt, setPrompt] = useState("");
  const [submittedGift, setSubmittedGift] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [santaSays, setSantaSays] = useState("");
  const [nickName, setNickName] = useState("");
  const [talkBubble, setTalkBubble] = useState<Message[]>([]);

  useEffect(() => {
    const nameFromStorage = localStorage.getItem("nickName");
    if (nameFromStorage) {
      setNickName(nameFromStorage);
    }
  }, []);

  return (
    <div
      className={
        "min-w-screen-xl flex flex-col items-center gap-4 bg-[#FBFFC9] px-10"
      }
    >
      <ChatRoom
        submittedGift={submittedGift}
        setSubmittedGift={setSubmittedGift}
        submittedPrompt={submittedPrompt}
        santaSays={santaSays}
        nickName={nickName}
        setTalkBubble={setTalkBubble}
        talkBubble={talkBubble}
      />
      <ChatBottom
        gift={gift}
        setGift={setGift}
        prompt={prompt}
        setPrompt={setPrompt}
        setSubmittedGift={setSubmittedGift}
        setSubmittedPrompt={setSubmittedPrompt}
        setSantaSays={setSantaSays}
        nickName={nickName}
        setTalkBubble={setTalkBubble}
      />
    </div>
  );
};
export default Chat;
