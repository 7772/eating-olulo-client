import dayjs from 'dayjs';


class DateHelper {
  static dayjs(format?: string) {
    return dayjs(format);
  }

  static getFullDateByTime(time: string, format: string | undefined = 'YYYY-MM-DDT') {
    return `${this.dayjs().format(format)}${time}`;
  }
}


export default DateHelper;
