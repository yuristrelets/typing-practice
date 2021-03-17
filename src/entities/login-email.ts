import { isString } from "../utils/is-string";

export class LoginEmail {
  static from(value: any): LoginEmail {
    if (isString(value)) {
      return new LoginEmail(value.toLowerCase());
    }

    throw new Error("Email must be a string!");
  }

  private readonly _type = Symbol("login email");

  private constructor(public readonly value: string) {}
}
