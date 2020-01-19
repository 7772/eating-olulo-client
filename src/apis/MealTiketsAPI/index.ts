import {APIService} from "../../services";


class MealTiketsAPI {
  static async getList() {
    const path = '/meal-tikets';

    return APIService.get(path, false);
  }
}


export default MealTiketsAPI;
