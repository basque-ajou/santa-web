import Image from "next/image";

const leaderboard = () => {
  return (
    <div className={"flex items-center justify-center"}>
      <div className={"flex flex-col"}>
        <p className={"font-bold"}>순위 비교하기</p>
        <Image
          className={"object-cover"}
          src={"/leaderboard.png"}
          width={414}
          height={85}
          alt={"leaderboard"}
        />
      </div>
    </div>
  );
};
export default leaderboard;
