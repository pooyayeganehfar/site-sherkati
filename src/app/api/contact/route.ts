import { NextResponse } from "next/server";
import { saveMessage } from "@/libs/messages";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "همه فیلدها الزامی هستند." }, { status: 400 });
  }

  saveMessage({
    name,
    email,
    message,
    date: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}