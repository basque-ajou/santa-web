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
  const onClickHandler = async () => {
    try {
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
    } catch (e) {
      console.error("Error sending data:", e);
    }
  };
  return (
    <div className="fixed bottom-0 flex h-fit">
      <div className="flex flex-col">
        <input
          className={
            "w-[1042px] rounded-[55px] border border-[#363636] px-[38px] py-8"
          }
          placeholder={"받고 싶은 선물을 적어주세요."}
          onChange={(e) => setGift(e.target.value)}
        />
        <input
          className={
            "w-[1042px] rounded-[55px] border border-[#363636] px-[38px] py-8"
          }
          placeholder={"선물을 받고 싶은 이유를 적어주세요."}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button
        className={
          "border- rounded-[30px] border-[#363636] bg-[#C9FFDE] px-[36px]"
        }
        onClick={onClickHandler}
      >
        산타에게
        <br />
        메세지 <br /> 보내기
      </button>
    </div>
  );
};
