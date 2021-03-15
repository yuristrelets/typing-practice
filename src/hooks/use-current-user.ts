import { useContext } from "react";
import { LogedInUser } from "../providers/loged-in-user";
import type { User } from "../entities/user";

export default function useCurrentUser(): User | null {
  const { state: { user } = { user: null } } = useContext(LogedInUser);

  return user;
}

