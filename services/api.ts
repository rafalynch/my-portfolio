import * as contentful from "contentful";

const client = contentful.createClient({
  space: "dtppplz3ege8",
  accessToken: "83gzrJ6NadOSnS0ltkF6rqyhIbFVg3PSse-pNT9Lgac",
});

export async function getAllEntries() {
  return await client.getEntries().catch(console.error);
}

export async function getAsset(assetId: string) {
  const asset = await client.getAsset(assetId).catch(console.error);
  return asset?.fields.file.url;
}
