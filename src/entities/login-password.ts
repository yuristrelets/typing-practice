import { isString } from "../utils/is-string";

export class LoginPassword {
  private readonly _type = Symbol("login password");
  public value: string;

  static from(value: any): LoginPassword {
    if (isString(value)) {
      return new LoginPassword(value);
    }

    throw new Error("Password must be a string!");
  }

  private constructor(password: string) {
    this.value = password;
  }
}
