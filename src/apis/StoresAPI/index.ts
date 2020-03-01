import {APIService} from "../../services";


class StoresAPI {
  static async getList() {
    const path = '/stores';

    return APIService.get(path, true);
  }

  static async register(params: any) {
    const path = '/stores/register';
    const body = {
      name: params.name,
      phone_number: params.phoneNumber,
    };

    return APIService.post(path, body, true);
  }
}


export default StoresAPI;
