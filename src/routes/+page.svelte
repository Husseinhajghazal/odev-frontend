<script>
  import Header from "../components/AllUser/Header.svelte";
  import Table from "../components/AllUser/Table.svelte";
  import { users } from "../store/users";
  export let data;
  users.set(data.users);
</script>

<main class="container">
  <Header />
  <Table />
</main>
