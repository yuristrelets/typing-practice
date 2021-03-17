import UserService from "./user-service";
import { User } from "../entities/user";
import { LoginEmail } from "../entities/login-email";
import { LoginPassword } from "../entities/login-password";

export default class LoginService {
  constructor(private readonly userService: UserService) {}

  public async login(email: LoginEmail, password: LoginPassword): Promise<User> {
    const user = await this.userService.getByCredentials(email.value, password.value);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}
