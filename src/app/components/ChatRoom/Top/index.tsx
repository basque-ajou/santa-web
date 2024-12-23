import Image from "next/image";

type Props = {
  nickName: string | null;
};

export const Top = ({ nickName }: Props) => {
  return (
    <div className={"flex items-center justify-between"}>
      <div></div>
      <Image src={"/santa-tell.png"} width={271} height={69} alt={"logo"} />
      <div className={"font-regular pr-20 text-2xl"}>{nickName}</div>
    </div>
  );
};
