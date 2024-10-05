import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const uri = searchParams.get("uri");
  const xCraftLivePreview = searchParams.get("x-craft-live-preview");
  const xCraftPreview = searchParams.get("x-craft-preview");
  const token = searchParams.get("token");

  if (secret !== process.env.CRAFTCMS_PREVIEW_SECRET || !uri) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  // Enable Preview Mode by setting the cookies
  cookies().set("next-preview-data", JSON.stringify({ isPreview: true }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  const newUrl = new URL(`/${uri}`, request.url);

  if (token) newUrl.searchParams.set("token", token);
  if (xCraftLivePreview)
    newUrl.searchParams.set("xCraftLivePreview", xCraftLivePreview);
  if (xCraftPreview) newUrl.searchParams.set("xCraftPreview", xCraftPreview);

  // Redirect to the path from the fetched post
  return NextResponse.redirect(newUrl);
}
