import { isString } from "../utils/is-string";

export class LoginPassword {
  static from(value: any): LoginPassword {
    if (isString(value)) {
      return new LoginPassword(value);
    }

    throw new Error("Password must be a string!");
  }

  private readonly _type = Symbol("login password");

  constructor(public readonly value: string) {}
}
