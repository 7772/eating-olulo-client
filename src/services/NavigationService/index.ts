class NavigationService {

  static navigate(path: string): void {
    window.location.href = path;
  }

  static reload(): void {
    window.location.reload();
  }
}


export default NavigationService;
