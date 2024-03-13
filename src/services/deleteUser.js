import axios from "axios";
import { toasts } from "svelte-toasts";
import { users } from "../store/users";

export async function deleteUser(id) {
  try {
    await axios.delete(`https://ordev-backend.onrender.com/users/${id}`);
    toasts.add({
      description: "User has been deleted successfully",
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "success",
    });
    users.update((users) => users.filter((user) => user.id != id));
  } catch (e) {
    toasts.add({
      description: e.response.data.message,
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "error",
    });
  }
}
