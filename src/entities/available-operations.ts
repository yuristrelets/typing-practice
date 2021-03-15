import { Role } from "./role";
import { Operation } from "./operation";

export const AvailableOperations = {
  [Role.CLIENT]: {
    [Role.CLIENT]: [],
    [Role.MODERATOR]: [],
    [Role.ADMIN]: [],
  },
  [Role.MODERATOR]: {
    [Role.CLIENT]: [Operation.UPDATE_TO_MODERATOR],
    [Role.MODERATOR]: [Operation.UPDATE_TO_CLIENT],
    [Role.ADMIN]: [],
  },
  [Role.ADMIN]: {
    [Role.CLIENT]: [Operation.UPDATE_TO_MODERATOR],
    [Role.MODERATOR]: [Operation.UPDATE_TO_CLIENT, Operation.UPDATE_TO_ADMIN],
    [Role.ADMIN]: [Operation.UPDATE_TO_MODERATOR],
  },
};

export type RolesToAvailableOperations = typeof AvailableOperations;
