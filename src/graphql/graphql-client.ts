import { GraphQLClient } from "graphql-request";
import { DocumentNode } from "graphql";

type IHeaders = {
  Authorization: string;
  [key: string]: string;
};

type IPreviewTokens = {
  token?: string;
  xCraftPreview?: string;
  xCraftLivePreview?: string;
};

export const cmsClient = (tokens: IPreviewTokens = {}) => {
  const GQL_URL = process.env.GQL_API_URL ?? "";

  const headers: IHeaders = {
    Authorization: `Bearer ${process.env.GQL_API_TOKEN}`,
  };

  let API_URL = GQL_URL;

  if (tokens && tokens?.token) {
    const {
      token,
      xCraftPreview: xCraftPreview,
      xCraftLivePreview: xCraftLivePreview,
    } = tokens;

    if (xCraftPreview) {
      headers["x-craft-preview"] = xCraftPreview;
    }

    if (xCraftLivePreview) {
      headers["x-craft-live-preview"] = xCraftLivePreview;
    }

    API_URL = token ? `${GQL_URL}?token=${token}` : API_URL;
  }

  return new GraphQLClient(API_URL, {
    headers,
  });
};

export const getGqlData = async <T>(
  query: DocumentNode,
  variables: T,
  tokens?: IPreviewTokens,
) => {
  const client = cmsClient(tokens ?? {});

  try {
    return await client.request(query, variables ?? {});
  } catch (error) {
    console.error("Fehler bei der GraphQL-Anfrage:", error);
    throw error;
  }
};
