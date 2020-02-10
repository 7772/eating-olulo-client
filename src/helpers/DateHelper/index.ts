import dayjs from 'dayjs';


class DateHelper {
  static dayjs(format?: string) {
    return dayjs(format);
  }

  static getFullDateByTime(time: string, format: string | undefined = 'YYYY-MM-DDT') {
    return `${this.dayjs().format(format)}${time}`;
  }

  static getTimestampByFullDate(fullDateString: string): number {
    const timestamp = dayjs(fullDateString).unix() * 1000;

    return timestamp;
  }

  static getTimestamp(): number {
    return dayjs().unix() * 1000;
  }

  static secToMin(sec: number): number {
    return Math.ceil(sec / 60);
  }

  static minToHourMinFormat(min: number): string {
    let hours = Math.floor(min / 60);
    let minutes = min % 60;
    
    return (hours > 0 ? hours + '시간' : '') + ' ' + (minutes > 0 || hours == 0 ? minutes + '분' : '');
  }
}


export default DateHelper;
