import UserService from "./user-service";

export default class LoginService {
  constructor(private readonly userService: UserService) {}

  // Try to define better types
  public async login(email: any, password: any): Promise<any> {
    // Implement the logic
    throw new Error("Not Implemented");
  }
}
