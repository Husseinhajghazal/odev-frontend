import axios from "axios";
import { toasts } from "svelte-toasts";

export async function getAllUsers() {
  let res;
  try {
    res = await axios.get("https://ordev-backend.onrender.com/users");
  } catch (e) {
    return toasts.add({
      description: e.response.data.message,
      duration: 5000,
      placement: "bottom-right",
      theme: "light",
      type: "error",
    });
  }

  if (res.status == 200) {
    return res.data.users;
  } else {
    return [];
  }
}
