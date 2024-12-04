"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FBFFC9] p-6 align-middle">
      <img
        className={"h-[136px] w-[562px]"}
        src={"/santa-tell.png"}
        alt={"santa-logo"}
      />
      <div className="flex min-h-screen w-full items-center justify-around">
        <div
          className={"flex flex-col justify-between hover:cursor-pointer"}
          onClick={() => router.push("/name")}
        >
          <div className="flex h-[465px] w-[465px] flex-col justify-center justify-items-center rounded-[40px] bg-[#FFC9C9]">
            <div className="flex flex-col items-center">
              <Image
                src={"/main/santa.png"}
                width={320}
                height={329}
                alt={"santa"}
              />
            </div>
          </div>
          <div className={"justify-items-center text-[35px]"}>
            <p>Chat with Santa</p>
            <p className={"font-bold"}>산타와 대화하기</p>
          </div>
        </div>
        <div className={"flex flex-col justify-between"}>
          <div className="flex h-[465px] w-[465px] flex-col justify-center justify-items-center rounded-[40px] bg-[#C9FFDE]">
            <div className="flex flex-col items-center">
              <div className={"flex flex-col"}>
                <Image
                  src={"/main/christmasDate.png"}
                  width={320}
                  height={329}
                  alt={"santa"}
                />
              </div>
            </div>
          </div>
          <div className={"justify-items-center text-[35px]"}>
            <p>Leaderboard</p>
            <p className={"font-bold"}>순위 경쟁하기</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
