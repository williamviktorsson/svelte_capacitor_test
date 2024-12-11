<script>
  export let data;
</script>

<p>{data.clicks}</p>

<button
  on:click={async () => {
    const result = await fetch("https://svelte-capacitor-test.onrender.com/", {
      method: "POST",
    });
    const json = await result.json();
    data.clicks = json.clicks;
  }}>Click</button
>
