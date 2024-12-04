"use client";
type Params = Promise<{ name: String }>;
import Image from "next/image";
export const ChatList = () => {
  return (
    <aside className={"h-real-screen z-30 w-full md:w-[196px]"}>
      <div
        className={
          "flex h-full flex-col rounded-[30px] bg-[#FFC9C9] px-3 pb-32 md:border-r md:pb-20"
        }
      >
        <div className="flex flex-col items-center justify-between">
          <Image
            className="rounded-full border-2 border-[#8B8B8B] bg-white"
            width={65}
            height={65}
            src={"/santa-claus.png"}
            alt={"list"}
          />
          <div className={"text-black"}>Santa1</div>
        </div>

        <div className={"text-white"}>홈으로</div>
      </div>
    </aside>
  );
};
