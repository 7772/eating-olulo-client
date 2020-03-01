import {APIService} from "../../services";


class AuthAPI {
  static async login(params: any) {
    const path = '/auth/login';
    const body = {
      username: params.username,
      password: params.password,
    };

    return APIService.post(path, body, false);
  }

  static async signUp(params: any) {
    const path = '/auth/sign-up';
    const body = {
      username: params.username,
      password: params.password,
    };

    return APIService.post(path, body, false);
  }
}


export default AuthAPI;
