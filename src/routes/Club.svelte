<script lang="ts">
  export let club: ClubInfo;

  const has_code = !!club.code;
  const has_additional_info = !!club.additional_info;
</script>

<div class="container">
  <h2>{club.name}</h2>
  <table>
    <tr>
      <th>President</th>
      <th>Staff</th>
      <th>Communication</th>
      {#if has_code}
        <th>Code</th>
      {/if}
    </tr>
    <tr class="stuff">
      <th>{club.president}</th>
      <th>{club.staff.join(", ")}</th>
      <th>{club.pmoc}</th>
      {#if has_code}
        <th>{club.code}</th>
      {/if}
    </tr>
  </table>
  {#if has_additional_info}
    <p>{club.additional_info}</p>
  {/if}
</div>

<style>
  .container {
    box-shadow: 7px 7px 10px darkgray;
    padding: 1.5rem;
    border-radius: 15px;
    border: solid var(--color-theme-1);
    max-width: 40rem;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;
  }

  .stuff {
    padding: 4rem;
  }
</style>
