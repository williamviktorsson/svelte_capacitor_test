<script>
  export let data;
</script>

<p>{data.clicks}</p>

<button
  on:click={async () => {
    const result = await fetch("http://localhost:5173/", {
      method: "POST",
    });
    const json = await result.json();
    data.clicks = json.clicks;
  }}>Click</button
>
