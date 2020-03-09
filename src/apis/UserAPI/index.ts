import {APIService} from "../../services";


class UserAPI {
  static async me() {
    const path = '/me';

    return APIService.get(path, true);
  }
}


export default UserAPI;
