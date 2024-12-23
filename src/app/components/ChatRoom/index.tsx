import { useEffect } from "react";

type Props = {
  submittedGift: string;
  setSubmittedGift: React.Dispatch<React.SetStateAction<string>>;
  submittedPrompt: string;
  santaSays: string;
  nickName: string | null;
};

export const ChatRoom = ({
  submittedGift,
  setSubmittedGift,
  submittedPrompt,
  santaSays,
  nickName,
}: Props) => {
  const getChatList = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nickName,
        }),
        credentials: "include",
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (submittedGift && submittedPrompt) {
      setSubmittedGift(submittedGift);
    }
  }, [submittedGift, submittedPrompt]);

  useEffect(() => {
    getChatList();
  }, []);

  return (
    <div className="flex h-[600px] w-full flex-col items-center transition-transform duration-500">
      <div
        className={
          "bg-gradient-custom h-full w-full rounded-[30px] border px-[44px] py-[54px]"
        }
      >
        <div className="left flex w-fit flex-row justify-center rounded-[30px] bg-[#FCE1E1]">
          <p className={"px-[30px] py-[21px]"}>
            허허허 선물을 받고 싶다고?
            <br />
            어디 나를 설득해보거라~
          </p>
        </div>
        {submittedGift.length > 0 && (
          <div className="flex w-full flex-row-reverse">
            <div
              className={
                "mb-4 flex w-fit flex-row-reverse rounded-[30px] bg-[#E1FCE3] px-7 py-[21px]"
              }
            >
              <p>
                🎁 선물은 {submittedGift}을 받고싶어요
                <br />
                📝 왜냐하면 {submittedPrompt}
              </p>
            </div>
          </div>
        )}
        <div className={"w-full md:w-1/2"}>
          {santaSays.length > 0 && (
            <p className="w-fit rounded-[30px] bg-[#FCE1E1] px-[30px] py-[21px]">
              {santaSays}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
