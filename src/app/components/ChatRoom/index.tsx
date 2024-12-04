import { ChatBottom } from "@/app/components/ChatBottom";
import { useState } from "react";
import { Top } from "@/app/components/ChatRoom/Top";

export const ChatRoom = () => {
  const [gift, setGift] = useState("");
  const [prompt, setPrompt] = useState("");
  const [submittedGift, setSubmittedGift] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [santaSays, setSantaSays] = useState("");
  return (
    <div className="flex h-[640px] w-[1360px] flex-col items-center transition-transform duration-500 md:z-20 md:pl-[40px]">
      <Top />

      <div
        className={
          "bg-gradient-custom h-full w-full rounded-[30px] border px-[44px] py-[54px]"
        }
      >
        <div className="left flex w-[333px] flex-row justify-center rounded-[30px] bg-[#FCE1E1]">
          <p className={"px-[30px] py-[21px]"}>
            허허허 선물을 받고 싶다고?
            <br />
            어디 나를 설득해보거라~
          </p>
        </div>
        {submittedGift.length > 0 && (
          <div className="flex w-full flex-row-reverse">
            <div
              className={
                "mb-4 flex w-fit flex-row-reverse rounded-[30px] bg-[#E1FCE3] px-[30px] py-[21px]"
              }
            >
              <p>
                🎁 선물은 {submittedGift}을 받고싶어요
                <br />
                📝 왜냐하면 {submittedPrompt}
              </p>
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
