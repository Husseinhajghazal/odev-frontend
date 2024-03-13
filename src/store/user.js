import { writable } from "svelte/store";

export const user = writable({
  email: "",
  firstname: "",
  id: 0,
  lastname: "",
  role: "",
  status: "",
});
