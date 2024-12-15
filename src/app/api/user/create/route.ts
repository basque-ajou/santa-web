import { NextRequest, NextResponse } from "next/server";
import { CreateUser } from "@/types/user/type";
import { isValidate } from "@/app/util/validators";

export const POST = async (req: NextRequest) => {
  try {
    const request: CreateUser = await req.json();
    if (!isValidate(request)) {
      return NextResponse.json(false, { status: 400 });
    }

    return NextResponse.json(true, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 },
    );
  }
};
