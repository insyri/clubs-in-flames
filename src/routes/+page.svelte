<script>
  import Banner from "./Banner.svelte";
  import Club from "./Club.svelte";
  import data from "$lib/data.json";

  const empty = data.length == 0;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Banner />
  {#if empty}
    No information yet, check back later.
  {:else}
    {#each data as club}
      <Club {club} />
    {/each}
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
