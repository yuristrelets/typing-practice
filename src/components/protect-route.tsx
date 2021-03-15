import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import type { User } from "../entities/user";
import useCurrentUser from "../hooks/use-current-user";

type PermissionChecker = (user: User) => boolean;

export const protectRoute = (Component: any, checker: PermissionChecker): FC<RouteComponentProps> => (props) => {
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return <Redirect to="login" noThrow />;
  }

  if (!checker(currentUser)) {
    return <Redirect to="/not-found" noThrow />;
  }

  return <Component {...props} />;
};
