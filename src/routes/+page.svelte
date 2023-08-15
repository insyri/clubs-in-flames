<script>
  import Banner from "./Banner.svelte";
  import Club from "./Club.svelte";
  import data from "$lib/data.json";

  const empty = data.length == 0;
</script>

<svelte:head>
  <title>CCHS Clubs | Board of Information</title>
  <meta
    name="description"
    content="To publicize information and clear up misunderstandings. Created by Noah Mercedes."
  />
</svelte:head>

<section>
  <Banner />
  <div>
    {#if empty}
      No information yet, check back later.
    {:else}
      {#each data as club}
        <Club {club} />
      {/each}
    {/if}
  </div>
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
