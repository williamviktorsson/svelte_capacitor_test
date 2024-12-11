import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const result = await fetch("/");
  const { clicks } = await result.json();
  return { clicks };
}) satisfies PageLoad;

