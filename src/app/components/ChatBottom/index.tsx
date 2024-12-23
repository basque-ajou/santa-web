import { useState } from "react";

type Props = {
  gift: string;
  setGift: React.Dispatch<React.SetStateAction<string>>;
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setSubmittedGift: React.Dispatch<React.SetStateAction<string>>;
  setSubmittedPrompt: React.Dispatch<React.SetStateAction<string>>;
  setSantaSays: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatBottom = ({
  gift,
  setGift,
  prompt,
  setPrompt,
  setSubmittedGift,
  setSubmittedPrompt,
  setSantaSays,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onClickHandler = async () => {
    if (!gift || !prompt) {
      setError("선물과 이유를 모두 입력해주세요");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const data = await fetch("https://chat.basque.kro.kr/ask-santa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gift: gift, prompt: prompt }),
      });
      const result = await data.json();

      setSubmittedGift(gift);
      setSubmittedPrompt(prompt);
      setSantaSays(result.response);
      setIsLoading(false);
    } catch (e) {
      console.error("Error sending data:", e);
    }
  };
  return (
    <div className="flex h-fit w-full justify-center gap-4">
      <div className="flex w-full flex-col gap-4">
        <div className={"flex w-full items-center gap-[19px]"}>
          <img
            className={
              "h-[66px] w-[66px] rounded-full border border-black bg-white"
            }
            src={"/christmas-sock.png"}
            alt={"chirstmas-sock"}
          />
          <input
            className={
              "w-full rounded-[55px] border border-[#363636] px-[38px] py-8"
            }
            placeholder={"받고 싶은 선물을 적어주세요."}
            onChange={(e) => setGift(e.target.value)}
          />
        </div>
        <div className={"flex items-center gap-[19px]"}>
          <img
            className={
              "h-[66px] w-[66px] rounded-full border border-black bg-white"
            }
            src={"/jingle-bell.png"}
            alt={"jingle-bell"}
          />
          <input
            className={
              "w-full rounded-[55px] border border-[#363636] px-[38px] py-8"
            }
            placeholder={"선물을 받고 싶은 이유를 적어주세요."}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </div>
      <button
        className={"border-1 rounded-[30px] border-[#363636] bg-[#C9FFDE] px-8"}
        onClick={onClickHandler}
        disabled={isLoading}
      >
        {isLoading ? (
          "로딩 중 . . ."
        ) : (
          <p>
            산타에게
            <br />
            메세지 <br /> 보내기
          </p>
        )}
      </button>
      {error && <p className="absolute bottom-0 text-red-500">{error}</p>}{" "}
      {/* 에러 메시지 표시 */}
    </div>
  );
};
