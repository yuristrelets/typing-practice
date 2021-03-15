import { isString } from "../utils/is-string";

export class LoginEmail {
  private readonly _type = Symbol("login email");
  public value: string;

  static from(value: any): LoginEmail {
    if (isString(value)) {
      return new LoginEmail(value);
    }

    throw new Error("Email must be a string!");
  }

  private constructor(email: string) {
    this.value = email.toLowerCase();
  }
}
