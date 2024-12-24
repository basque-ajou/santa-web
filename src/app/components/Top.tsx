"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export const Top = () => {
  const router = useRouter();
  const pathname = usePathname();

  const nickName = useMemo(
    () => (pathname === "/chat" ? localStorage.getItem("nickName") : ""),
    [pathname],
  );

  return (
    <div className={"relative flex h-[70px] w-full items-center px-10"}>
      <button
        onClick={() => router.back()}
        className={"flex items-center justify-center gap-5"}
      >
        <Image
          className={""}
          width={30}
          height={30}
          src={"/back-arrow.png"}
          alt={"back-btn"}
        />
        <div className={"text-2xl font-bold"}>뒤로가기</div>
      </button>
      <Image
        src={"/santa-tell.png"}
        width={271}
        height={70}
        alt={"logo"}
        className={"absolute left-1/2 top-0 -translate-x-1/2 transform"}
      />
      {nickName && (
        <div className={"font-regular ml-auto text-2xl"}>{nickName}</div>
      )}
    </div>
  );
};
