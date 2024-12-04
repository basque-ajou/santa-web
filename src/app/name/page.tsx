"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Name = () => {
  const router = useRouter();
  const [nickName, setNickName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!nickName.trim()) {
      alert("별명을 입력해주세요");
      return;
    }
    router.push(`/chat?name=${encodeURIComponent(nickName)}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div
      className={"flex min-h-screen flex-col items-center px-[72px] pt-[40px]"}
    >
      <div className={"flex items-center justify-center"}>
        <div
          className={"fixed left-0 flex items-center justify-center gap-[20px]"}
        >
          <img
            className={"w-[42px]"}
            src={"/back-arrow.png"}
            alt={"back-btn"}
          />
          <div>뒤로 가기</div>
        </div>
        <img src={"/santa-tell.png"} alt={"santa-tell"} />
      </div>
      <div className={"flex flex-col items-center justify-center"}>
        <div className={"flex flex-col items-center gap-[18px]"}>
          <div>산타와 대화하자</div>
          <div>산타와 대화할 별명을 입력해주세요.</div>
        </div>
        <div className={"flex gap-4"}>
          <input
            className={
              "w-[900px] rounded-[40px] border-[15px] border-[#363636] px-[34px] py-[22px] text-[35px] focus:outline-none"
            }
            onKeyDown={handleKeyDown}
            placeholder={"여기에 적어주세요."}
            onChange={(e) => setNickName(e.target.value)}
          />
          <button
            className="rounded-[40px] bg-[#363636] px-[48px] py-[32px] text-[35px] text-white"
            onClick={handleClick}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default Name;
