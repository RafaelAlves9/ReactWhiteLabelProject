import { IDateFormatting } from "./Interfaces/IDateFormatting.interface";

export class DateFormattingService implements IDateFormatting {
  getDate(date: Date): string {
    return date.getDate().toString().padStart(2, '0');
  };

  getMonth(date: Date): string {
    return (date.getMonth() + 1).toString().padStart(2, '0');
  };

  getYear(date: Date): string {
    return date.getFullYear().toString();
  };

  getHours(date: Date): string {
    return date.getHours().toString().padStart(2, '0');
  };

  getMinutes(date: Date): string {
    return date.getMinutes().toString().padStart(2, '0');
  };

  getSeconds(date: Date): string {
    return date.getSeconds().toString().padStart(2, '0');
  };

  getHourToNow(previousDate: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - previousDate.getTime()) / (1000 * 60 * 60));
    return diff.toString();
  };

  getDaysToNow(previousDate: Date): string {
    const now = new Date();
    const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffTime = startOfDay(now).getTime() - startOfDay(previousDate).getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays.toString();
  };

  getMonthsToNow(previousDate: Date): string {
    const now = new Date();
    const yearsDifference = now.getFullYear() - previousDate.getFullYear();
    const monthsDifference = now.getMonth() - previousDate.getMonth();
    const totalMonthsDifference = yearsDifference * 12 + monthsDifference;
    return totalMonthsDifference.toString();
  };

  getCurrentLocation(): string {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  };

  format(date: Date): string {
    return `${this.getDate(date)}-${this.getMonth(date)}-${this.getYear(date)}`;
  };

  formatToDynamic(date: Date, type?: string): string {
    if (type) {
      return this.customFormat(date, type);
    }
    return `${this.getYear(date)}-${this.getMonth(date)}-${this.getDate(date)}`;
  };

  isValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
  };

  toUTC(date: Date): number {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
  };

  differenceBetweenInMinutes(olderDate: Date, newestDate: Date): string {
    const diff = Math.floor((newestDate.getTime() - olderDate.getTime()) / (1000 * 60));
    return diff.toString();
  };

  differenceBetweenInMonths(olderDate: Date, newestDate: Date): string {
    const yearsDifference = newestDate.getFullYear() - olderDate.getFullYear();
    const monthsDifference = newestDate.getMonth() - olderDate.getMonth();
    const totalMonthsDifference = yearsDifference * 12 + monthsDifference;
    return totalMonthsDifference.toString();
  };

  differenceBetweenInYears(olderDate: Date, newestDate: Date): string {
    const diff = newestDate.getFullYear() - olderDate.getFullYear();
    return diff.toString();
  };

  differenceBetweenInDays(olderDate: Date, newestDate: Date): string {
    const diff = Math.floor((newestDate.getTime() - olderDate.getTime()) / (1000 * 60 * 60 * 24));
    return diff.toString();
  };

  currentTime(date: Date): string {
    return `${this.getHours(date)}:${this.getMinutes(date)}:${this.getSeconds(date)}`;
  };

  isDateToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  isDateInCurrentMonth(date: Date): boolean {
    const today = new Date();
    return date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  isDateBetween(initial: Date, final: Date, comparison: Date): boolean {
    return comparison >= initial && comparison <= final;
  };

  convertStringToDate(date: string): Date {
    const parsedDate = new Date(date);
    if (this.isValidDate(parsedDate)) {
      return parsedDate;
    }
    return new Date();
  };

  private customFormat(date: Date, formatString: string): string {
    const replacements: { [key: string]: string } = {
      "YYYY": this.getYear(date),
      "MM": this.getMonth(date),
      "DD": this.getDate(date),
      "HH": this.getHours(date),
      "mm": this.getMinutes(date),
      "ss": this.getSeconds(date)
    };
    return formatString.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => replacements[match]);
  };
};