const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
export const postType = process.env.NEXT_PUBLIC_CONTENTFUL_POST_TYPE;

const client = require("contentful").createClient({
  space,
  accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log("Error getting Entries");
}

export default { fetchEntries };
