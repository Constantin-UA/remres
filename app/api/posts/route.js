import { NextResponse } from "next/server";
import { dataPosts } from "./posts";
export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text: body.message,
  };
  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
  return NextResponse.json({ message: "done" });
}

export async function GET(req) {
  let currentPosts = dataPosts;

  return NextResponse.json(currentPosts);
}
