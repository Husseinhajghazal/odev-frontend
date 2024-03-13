<script>
  import { fade } from "svelte/transition";
  import { isOverlayOpen } from "../store/overlay";
  import EditForm from "../components/editingUser/EditForm.svelte";
  import Header from "../components/AllUser/Header.svelte";
  import Table from "../components/AllUser/Table.svelte";
  import { users } from "../store/users";
  export let data;
  users.set(data.users);
</script>

<main class="container overflow-hidden">
  <Header />
  <Table />
</main>
{#if $isOverlayOpen}
  <div
    class="position-fixed top-0 left-0 w-100 h-100 shadow cursor"
    on:click={() => isOverlayOpen.set(false)}
    transition:fade
  />
  <EditForm />
{/if}

<style>
  .shadow {
    background-color: rgba(0, 0, 0, 0.122);
    cursor: pointer;
  }
</style>
