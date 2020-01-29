import {APIService} from "../../services";


class MealTiketsAPI {
  static async getList() {
    const path = '/meal-tikets';

    return APIService.get(path, false);
  }

  static async register(params: any) {
    const path = '/meal-tikets/register';
    const body = {
      store_id: params.storeId,
      end_time: params.endTime, 
    };

    return APIService.post(path, body, false);
  }
}


export default MealTiketsAPI;
