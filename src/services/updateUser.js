import axios from "axios";
import { toasts } from "svelte-toasts";
import { user } from "../store/user";
import { users } from "../store/users";
import { isOverlayOpen } from "../store/overlay";

export async function updateUser(formData, id) {
  let res;
  try {
    res = await axios.put(
      `https://ordev-backend.onrender.com/users/${id}`,
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
    users.update((users) =>
      users.map((user) =>
        user.id == id
          ? {
              ...user,
              firstname: formData.firstName,
              lastname: formData.lastName,
              email: formData.email,
              role: formData.role,
            }
          : user
      )
    );
    toasts.add({
      description: "User has been updated successfully",
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "success",
    });
    user.set({
      email: "",
      firstname: "",
      id: 0,
      lastname: "",
      role: "",
      status: "",
    });
    isOverlayOpen.set(false);
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
