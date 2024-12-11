import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const result = await fetch("http://localhost:5173/");
  const { clicks } = await result.json();
  return { clicks };
}) satisfies PageLoad;

