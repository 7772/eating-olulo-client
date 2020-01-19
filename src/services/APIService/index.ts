import {LocalStorageService} from "..";
import {Camelizer} from '../../utils';


const API_BASE_URL = 'http://localhost:8080/api/v1';

class APIService {
  static get baseURL() {
    return API_BASE_URL;
  }

  static async get(path: string, needToken: boolean = false) {
    const url = this.baseURL + path;
    const params: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (needToken) {
      params.headers['Authorization'] = `Bearer ${LocalStorageService.getAccessToken()}`;
    }

    const response = await fetch(url, params);
    const json = await response.json();

    return {
      response: response,
      json: Camelizer.camelizeKeys(json),
    };
  }

  static async post(path: string, body: any, needToken: boolean = false) {
    const url = this.baseURL + path;
    const params: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),      
    };

    if (needToken) {
      params.headers['Authorization'] = `Bearer ${LocalStorageService.getAccessToken()}`;
    }

    const response = await fetch(url, params);
    const json = await response.json();

    return {
      response: response,
      json: Camelizer.camelizeKeys(json),
    };
  }

  static async delete(path: string, needToken: boolean = false) {
    const url = this.baseURL + path;
    const params: any = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (needToken) {
      params.headers['Authorization'] = `Bearer ${LocalStorageService.getAccessToken()}`;
    }

    const response = await fetch(url, params);
    const json = await response.json();

    return {
      response: response,
      json: Camelizer.camelizeKeys(json),
    };
  }
}


export default APIService;
