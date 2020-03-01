class LocalStorageService {
  static setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
  }

  static getAccessToken(): string | null {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken && accessToken !== '') {
      return JSON.parse(accessToken);
    } else {
      return null;
    }
  }

  static hasAccessToken(): boolean {
    const accessToken = this.getAccessToken();

    return (!accessToken || accessToken === '') ? false : true;
  }

  static deleteAccessToken() {
    localStorage.setItem('accessToken', '');
  }
}


export default LocalStorageService;
