import UserService from "./user-service";
import { User } from "../entities/user";
import { LoginEmail } from "../entities/login-email";
import { LoginPassword } from "../entities/login-password";

export default class LoginService {
  constructor(private readonly userService: UserService) {}

  public async login(email: any, password: any): Promise<User> {
    const validEmail = LoginEmail.from(email);
    const validPassword = LoginPassword.from(password);
    const user = await this.userService.getByCredentials(validEmail.value, validPassword.value);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}
