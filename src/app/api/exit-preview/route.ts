import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // Clear the preview data cookie
  cookies().delete("next-preview-data");

  // Redirect to the homepage
  return NextResponse.redirect(new URL(request.url, request.url));
}
