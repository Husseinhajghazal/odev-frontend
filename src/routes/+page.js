import { getAllUsers } from "../services/getAllUsers";

export const load = async () => {
  const users = await getAllUsers();
  return { users };
};
