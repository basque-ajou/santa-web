"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FBFFC9] p-6 align-middle">
      <Image
        className={"absolute top-0 pt-4"}
        width={562}
        height={145}
        src={"/big-santa-tell.png"}
        alt={"santa-logo"}
      />
      <div className="flex w-full items-center justify-around">
        <div
          className={"flex flex-col justify-between hover:cursor-pointer"}
          onClick={() => router.push("/name")}
        >
          <div className="flex h-96 w-96 flex-col justify-center justify-items-center rounded-[40px] border border-[#363636] bg-[#FFC9C9]">
            <div className="flex flex-col items-center">
              <Image
                src={"/main/santa.png"}
                width={320}
                height={329}
                alt={"santa"}
              />
            </div>
          </div>
          <div
            className={"justify-items-center text-[35px] hover:cursor-pointer"}
          >
            <p>Chat with Santa</p>
            <p className={"font-bold"}>산타와 대화하기</p>
          </div>
        </div>
        <div className={"flex flex-col justify-between"}>
          <div className="flex h-96 w-96 flex-col justify-center justify-items-center rounded-[40px] border border-[#363636] bg-[#C9FFDE]">
            <div className="flex flex-col items-center">
              <div className={"flex flex-col hover:cursor-pointer"}>
                <Image
                  src={"/main/christmasDate.png"}
                  width={320}
                  height={329}
                  alt={"santa"}
                />
              </div>
            </div>
          </div>
          <div
            className={"justify-items-center text-[35px] hover:cursor-pointer"}
          >
            <p>Leaderboard</p>
            <p className={"font-bold"}>순위 경쟁하기</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
