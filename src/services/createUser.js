import axios from "axios";
import { toasts } from "svelte-toasts";
import { goto } from "$app/navigation";

export async function createUser(formData) {
  let res;
  try {
    res = await axios.post(
      "https://ordev-backend.onrender.com/users",
      {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        role: formData.role,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    toasts.add({
      description: "User has been created successfully",
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "success",
    });
    goto("/");
  } catch (e) {
    return toasts.add({
      description: e.response.data.message,
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "error",
    });
  }
}
