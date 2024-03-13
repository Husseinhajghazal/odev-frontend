<script>
  import Input from "../Input.svelte";
  import SubmitButton from "../SubmitButton.svelte";
  import { updateUser } from "../../services/updateUser";
  import { options } from "../../Data/UserTypeOptions";
  import { fade } from "svelte/transition";
  import { user } from "../../store/user";

  let fetchedUser;
  user.subscribe((val) => (fetchedUser = val));

  let formData = {
    firstName: fetchedUser.firstname,
    lastName: fetchedUser.lastname,
    email: fetchedUser.email,
    role: fetchedUser.role,
  };

  function handleChange(e, inputName) {
    formData[inputName] = e.target.value;
  }
</script>

<div
  class="position-fixed top-50 start-50 translate-middle bg-white p-3 p-lg-4 rounded-4 overlay-form"
>
  <form
    transition:fade
    on:submit|preventDefault={() => updateUser(formData, fetchedUser.id)}
    class="d-flex align-item-center justify-content-center flex-column w-100"
  >
    <div class="d-flex flex-column flex-md-row mb-3 gap-3">
      <Input
        inputType="text"
        placeholder="First Name"
        value={formData.firstName}
        options={[]}
        handleChange={(e) => handleChange(e, "firstName")}
      />
      <Input
        inputType="text"
        placeholder="Last Name"
        value={formData.lastName}
        options={[]}
        handleChange={(e) => handleChange(e, "lastName")}
      />
    </div>
    <div class="d-flex flex-column flex-md-row mb-5 gap-3">
      <Input
        inputType="email"
        placeholder="Email"
        value={formData.email}
        options={[]}
        handleChange={(e) => handleChange(e, "email")}
      />
      <Input
        inputType="select"
        placeholder=""
        value={formData.role}
        handleChange={(e) => handleChange(e, "role")}
        {options}
      />
    </div>
    <SubmitButton />
  </form>
</div>

<style>
  .overlay-form {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    .overlay-form {
      width: 100%;
    }
  }
</style>
