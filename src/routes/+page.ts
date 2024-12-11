import type { PageLoad } from "./$types";

export const load = (async ({}) => {
  const result = await fetch("https://svelte-capacitor-test.onrender.com/");
  const { clicks } = await result.json();
  return { clicks };
}) satisfies PageLoad;

