<script>
  import { isOverlayOpen } from "../store/overlay";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import { fade } from "svelte/transition";
  import "../app.css";
</script>

<slot />
<ToastContainer placement="bottom-right" let:data>
  <FlatToast {data} />
</ToastContainer>
{#if $isOverlayOpen}
  <div
    class="position-fixed top-0 left-0 w-100 h-100 shadow cursor"
    on:click={() => isOverlayOpen.set(false)}
    transition:fade
  />
  <div
    transition:fade
    class="position-fixed top-50 start-50 translate-middle fs-1 bg-white"
  >
    Hi
  </div>
{/if}

<style>
  .shadow {
    background-color: rgba(0, 0, 0, 0.122);
    cursor: pointer;
  }
</style>
