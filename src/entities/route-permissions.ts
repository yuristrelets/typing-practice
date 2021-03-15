import type { User } from "./user";
import { Admin } from "./admin";
import { Moderator } from "./moderator";

export const hasAccessToDashboard = (user: User) => {
  return user instanceof Admin || user instanceof Moderator;
}
