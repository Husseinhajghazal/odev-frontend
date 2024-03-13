<script>
  import Input from "../Input.svelte";
  import SubmitButton from "../SubmitButton.svelte";
  import { createUser } from "../../services/createUser";
  import { options } from "../../Data/UserTypeOptions";

  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  };

  function handleChange(e, inputName) {
    formData[inputName] = e.target.value;
  }
</script>

<form
  on:submit|preventDefault={() => createUser(formData)}
  class="d-flex align-item-center justify-content-center flex-column"
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

<style>
  form {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    form {
      width: 85%;
    }
  }

  @media screen and (min-width: 992px) {
    form {
      width: 75%;
    }
  }
</style>
