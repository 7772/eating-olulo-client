import {APIService} from "../../services";


class StoresAPI {
  static async getList() {
    const path = '/stores';

    return APIService.get(path, false);
  }

  static async register(params: any) {
    const path = '/stores/register';
    const body = {
      name: params.name,
      phone_number: params.phoneNumber,
    };

    return APIService.post(path, body, false);
  }
}


export default StoresAPI;
