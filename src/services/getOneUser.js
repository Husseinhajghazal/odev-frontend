import axios from "axios";
import { toasts } from "svelte-toasts";
import { user } from "../store/user";

export async function getOneUser(id) {
  let res;
  try {
    res = await axios.get(`https://ordev-backend.onrender.com/users/${id}`);
  } catch (e) {
    return toasts.add({
      description: e.response.data.message,
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "error",
    });
  }

  user.set(res.data.user);
}
