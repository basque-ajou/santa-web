"use client";

import { useState, useEffect } from "react";

import { ChatRoom } from "@/app/components/ChatRoom";
import { ChatBottom } from "@/app/components/ChatBottom";
import { Top } from "@/app/components/ChatRoom/Top";

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
    console.log(nameFromStorage);
    if (nameFromStorage) {
      setNickName(nameFromStorage);
    }
  }, []);

  return (
    <div
      className={
        "min-w-screen-xl m-auto flex min-h-screen flex-col items-center gap-4 bg-[#FBFFC9] px-10 pt-5"
      }
    >
      <Top nickName={nickName} />
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
