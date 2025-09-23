import { NextRequest, NextResponse } from "next/server";

const WEB3FORM_ACCESS_KEY = "ff238e74-991b-4715-8fed-dfe7afc4d3d4";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORM_ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", data);
      return NextResponse.json({ success: false, error: data.message || "Failed to send" });
    }
  } catch (error: unknown) {
  let errorMessage = "Server Error";

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  console.error("Server error:", errorMessage);
  return NextResponse.json({ success: false, error: errorMessage });
}

}
