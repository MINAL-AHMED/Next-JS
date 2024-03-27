import { connect } from "@/dbConfig/dbConfig";
import { getDateFromToken } from "@/helpers/getDateFromToken";
import User from "@/models/useModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(request: NextRequest) {
  const userId = getDateFromToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");
  return NextResponse.json({
    message: "User not found",
    data: user,
  });
}
