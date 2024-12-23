"use client";

import { useRef, useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Name = () => {
  const router = useRouter();
  const [nickName, setNickName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!nickName.trim()) {
      alert("별명을 입력해주세요");
      return;
    }
    saveToLocalStorage();
    router.push("/chat");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("nickName", nickName);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className={
        "flex min-h-screen flex-col items-center justify-center px-[72px] pt-[40px]"
      }
    >
      <div className={"flex w-full"}>
        <div
          className={
            "flex items-center justify-center gap-5 p-16 hover:cursor-pointer"
          }
          onClick={() => router.back()}
        >
          <Image
            className={""}
            width={30}
            height={30}
            src={"/back-arrow.png"}
            alt={"back-btn"}
          />
          <div className={"text-2xl font-bold"}>뒤로가기</div>
        </div>
        <Image
          className={"h-30 w-68 pt-4"}
          width={562}
          height={145}
          src={"/big-santa-tell.png"}
          alt={"santa-logo"}
        />
      </div>
      <div className={"flex w-full flex-col items-center justify-center"}>
        <div className={"flex flex-col items-center justify-center gap-[18px]"}>
          <div className={"text-2xl font-bold"}>산타와 대화하자</div>
          <div className={"text-2xl font-normal text-[#363636]"}>
            산타와 대화할 별명을 입력해주세요.
          </div>
        </div>
        <div className={"flex w-full items-center justify-center gap-4 pt-8"}>
          <input
            className={
              "h-28 w-full rounded-[40px] border-[15px] border-[#363636] px-[34px] py-[22px] text-2xl shadow-stone-50 focus:outline-none"
            }
            onKeyDown={handleKeyDown}
            placeholder={"여기에 적어주세요."}
            onChange={(e) => setNickName(e.target.value)}
          />
          <button
            className="w-36 rounded-[40px] bg-[#363636] px-12 py-7 font-bold text-white"
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
