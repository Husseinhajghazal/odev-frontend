<script>
  import { heads } from "../../Data/TableHeads";
  import { deleteUser } from "../../services/deleteUser";
  import Icon from "@iconify/svelte";
  import { users } from "../../store/users";
  import { isOverlayOpen } from "../../store/overlay";
  import { fly } from "svelte/transition";
  let myUser = [];
  users.subscribe((val) => (myUser = val));
</script>

<table class="w-100">
  <thead>
    <tr>
      {#each heads as head}
        <th>{head}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each myUser as user}
      <tr transition:fly={{ x: -100, duration: 400 }}>
        <td>{user.email}</td>
        <td>{user.firstname} {user.lastname}</td>
        <td class={user.role}><p>{user.role}</p></td>
        <td class={user.status}><p>{user.status}</p></td>
        <td>
          <div class="d-flex gap-3">
            <button class="edit-icon" on:click={() => isOverlayOpen.set(true)}>
              <Icon icon="uil:edit" width="24" height="24" />
            </button>
            <button class="delete-icon" on:click={() => deleteUser(user.id)}>
              <Icon icon="material-symbols:delete" width="24" height="24" />
            </button>
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  th,
  td {
    border-bottom: 2px #e0e0e0 solid;
    border-collapse: collapse;
    padding: 1rem 0;
    text-align: left;
    color: #636264;
    cursor: pointer;
  }

  td.Admin p {
    background: #f8e0e0;
    font-weight: bold;
    color: #ce2626;
    border-radius: 15px;
    padding: 10px 15px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  td.User p {
    background: #e0eaf8;
    font-weight: bold;
    color: #266cce;
    border-radius: 15px;
    padding: 10px 15px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  td.Active p {
    background: #e0f8e8;
    font-weight: bold;
    color: #26ce5c;
    border-radius: 15px;
    padding: 10px 15px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-icon {
    transition: 300ms;
    border: none;
    background-color: transparent;
  }

  .delete-icon:hover {
    color: #ce2626;
    scale: 1.1;
  }

  .edit-icon {
    transition: 300ms;
    border: none;
    background-color: transparent;
  }

  .edit-icon:hover {
    color: #2664ce;
    scale: 1.1;
  }
</style>
