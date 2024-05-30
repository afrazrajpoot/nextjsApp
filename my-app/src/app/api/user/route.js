import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const user = [
      {
        name: "John",
        age: "22",
        course: "software",
      },
    ];
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    console.log(err.message);
  }
}
