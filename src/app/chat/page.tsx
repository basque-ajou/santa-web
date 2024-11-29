"use client";
import { useState, useEffect } from "react";
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
      <div className="fixed left-0 top-0 flex w-full flex-col">
        <p className="left w-[394px] flex-row rounded-[30px] bg-[#FCE1E1] px-[30px] py-[21px]">
          허허허 선물을 받고 싶다고?
          <br />
          어디 나를 설득해보거라~
        </p>
        {submittedGift.length > 0 && (
          <div className="flex w-full flex-row-reverse">
            <div
              className={
                "mb-4 flex w-fit flex-row-reverse rounded-[30px] bg-[#E1FCE3] px-[30px] py-[21px]"
              }
            >
              <p>🎁 선물은 {submittedGift}을 받고싶어요</p>
              <p>📝 왜냐하면 {submittedPrompt} 이기 때문이에요</p>
            </div>
          </div>
        )}
        {santaSays.length > 0 && (
          <p className="w-[394px] rounded-[30px] bg-[#FCE1E1] px-[30px] py-[21px]">
            {santaSays}
          </p>
        )}
      </div>
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
