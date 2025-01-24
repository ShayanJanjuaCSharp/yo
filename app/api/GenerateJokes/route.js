import { getRandomJoke } from "one-liner-joke";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const num = data.num;
  let jokes = "";
  for (let i = 0; i < num; i++) {
    const joke = await getRandomJoke();
    jokes = jokes + joke.body + "`";
  }
  return NextResponse.json({ jokes: jokes });
}
