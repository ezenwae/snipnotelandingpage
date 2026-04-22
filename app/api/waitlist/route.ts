import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.toLowerCase().trim() });

  if (error) {
    console.error("Supabase error:", error);
    if (error.code === "23505") {
      return Response.json({ error: "Already on the list" }, { status: 409 });
    }
    return Response.json({ error: "Something went wrong", detail: error.message, code: error.code }, { status: 500 });
  }

  return Response.json({ success: true }, { status: 201 });
}
