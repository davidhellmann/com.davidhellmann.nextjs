import { cookies } from "next/headers";

export const getPreviewData = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const previewData = cookies().get("next-preview-data");
  const preview = previewData ? JSON.parse(previewData.value).isPreview : false;

  const previewTokens = {
    token: searchParams.token as string | undefined,
    xCraftPreview: searchParams["x-craft-preview"] as string | undefined,
    xCraftLivePreview: searchParams["x-craft-live-preview"] as
      | string
      | undefined,
  };

  return { preview, previewTokens };
};
