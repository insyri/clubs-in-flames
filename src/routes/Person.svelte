<script lang="ts">
  export let person: Person | null;
</script>

{#if person !== null}
  <a href="mailto:{person.id}@students.ocps.net">{person.name}</a>
{:else}
  Unresolved
{/if}
