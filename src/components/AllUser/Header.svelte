<script>
  import Icon from '@iconify/svelte';
</script>

<header class="d-flex mt-5 mb-5 justify-content-between">
  <h1 class="text-secondary title fw-semibold">Company Users</h1>
  <a href="/create-user" class="bg-primary text-light p-1 p-md-2 p-lg-3 rounded-4 d-flex align-items-center justify-content-center gap-1">
    <Icon width="24" height="24" icon="ic:outline-plus" />
    Create user
  </a>
</header>

<style>
  .title {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 30px;
    }
  }

  @media screen and (min-width: 992px) {
    .title {
      font-size: 40px;
    }
  }
</style>