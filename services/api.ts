import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function getAllEntries() {
  return await client.getEntries().catch(console.error);
}

export async function getAsset(assetId: string) {
  const asset = await client.getAsset(assetId).catch(console.error);
  return asset?.fields.file.url;
}
