import { getMessages } from "@/libs/messages";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ messages: getMessages() });
}