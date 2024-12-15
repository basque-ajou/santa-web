import { NextRequest, NextResponse } from "next/server";
import { Author, CreateMessage, Message } from "@/types/chat/type";
import { isValidate } from "@/app/util/validators";

export const POST = async (req: NextRequest) => {
  try {
    const request: CreateMessage = await req.json();
    if (!isValidate(request)) {
      return NextResponse.json(false, { status: 400 });
    }

    const santaUrl = process.env.AI_URL;
    if (!santaUrl) {
      throw new Error("env variable is not set");
    }

    const santa = await fetch(santaUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    const { isSuccess, response } = await santa.json();

    const message: Message = {
      isSuccess,
      author: Author.SANTA,
      content: response,
      timestamp: new Date(),
    };
    return NextResponse.json(message, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 },
    );
  }
};
