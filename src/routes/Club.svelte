<script lang="ts">
  import Person from "./Person.svelte";
  export let club: ClubInfo;

  const has_code = !!club.code;
</script>

<div class="container">
  <h2>{club.name}</h2>
  <table>
    <tr>
      <th>President</th>
      <th>Sponsor</th>
    </tr>
    <tr class="variable">
      <th>
        <Person person={club.president} />
      </th>
      <th>
        <Person person={club.sponsor} />
      </th>
    </tr>
  </table>
  <table>
    <tr>
      <th>Staff</th>
    </tr>
    <tr class="variable">
      <th>
        {#if club.staff.length === 0} Unresolved {/if}
        {#each club.staff as person, index}
          <Person {person} />{#if index !== club.staff.length - 1} &nbsp; {/if}
        {/each}
      </th>
    </tr>
  </table>
  <table>
    <tr>
      <th>Communication</th>
      {#if has_code}
        <th>Code</th>
      {/if}
    </tr>
    <tr class="variable">
      <th>{club.pmoc}</th>
      {#if has_code}
        <th>{club.code}</th>
      {/if}
    </tr>
  </table>
  {#if !!club.additional_info}
    <p>{club.additional_info}</p>
  {/if}
</div>

<style>
  .container {
    box-shadow: 7px 7px 10px darkgray;
    padding: 1.5rem;
    border-radius: 15px;
    border: solid var(--color-theme-1);
    margin-bottom: 1.5rem;
    max-width: 40rem;
  }

  table {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .variable {
    padding: 4rem;
    font-weight: 100;
  }

  p {
    word-wrap: normal;
  }
</style>
