<script>
  export let inputType;
  export let value;
  export let placeholder;
  export let handleChange;
  export let options;
</script>

{#if inputType === "text"}
  <input
    class="w-100 p-2"
    type="text"
    {placeholder}
    bind:value
    on:change={handleChange}
  />
{:else if inputType === "email"}
  <input
    class="w-100 p-2"
    type="email"
    {placeholder}
    bind:value
    on:change={handleChange}
  />
{:else if inputType === "select"}
  <select class="w-100 p-2" bind:value on:change={handleChange}>
    {#each options as option}
      <option value={option.value}>{option.option}</option>
    {/each}
  </select>
{/if}

<style>
  input,
  select {
    transition: 300ms ease-in-out;
    border-radius: 10px;
    border: black solid 1px;
    height: 50px;
  }

  input:focus,
  select:focus {
    outline: none;
    border-color: #266cce;
  }

  input:hover,
  select:hover {
    border-color: #266cce;
  }
</style>
