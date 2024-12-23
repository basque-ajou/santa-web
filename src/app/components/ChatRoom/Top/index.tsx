import Image from "next/image";

type Props = {
  nickName: string | null;
};

export const Top = ({ nickName }: Props) => {
  return (
    <div className={"flex w-full items-center justify-between"}>
      <div> </div>
      <Image src={"/santa-tell.png"} width={271} height={50} alt={"logo"} />
      <div className={"font-regular text-lg"}>{nickName}</div>
    </div>
  );
};
