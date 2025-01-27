// import { createClient } from "@sanity/client";

// const client = createClient({
//   projectId: 'yn0oqril',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2022-11-16',
// });

// export async function sanityFetch( { query, params = {} }: { query: string; params?: any; }) {
//   return await client.fetch(query, params);
// }
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "yn0oqril",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-11-16",
});

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: any;
}) {
  return await client.fetch(query, params);
}
