import { DateFormattingService } from "@services/DateFormatting.service";

describe('DateFormattingService', () => {
  let service: DateFormattingService;

  beforeEach(() => {
    service = new DateFormattingService();
  });

  it('should format date to "DD"', () => {
    const date = new Date(2024, 4, 24);
    expect(service.getDate(date)).to.equal('24');
  });

  it('should format date to "MM"', () => {
    const date = new Date(2024, 4, 24);
    expect(service.getMonth(date)).to.equal('05');
  });

  it('should format date to "YYYY"', () => {
    const date = new Date(2024, 4, 24);
    expect(service.getYear(date)).to.equal('2024');
  });

  it('should format time to "HH"', () => {
    const date = new Date(2024, 4, 24, 14);
    expect(service.getHours(date)).to.equal('14');
  });

  it('should format time to "mm"', () => {
    const date = new Date(2024, 4, 24, 14, 30);
    expect(service.getMinutes(date)).to.equal('30');
  });

  it('should format time to "ss"', () => {
    const date = new Date(2024, 4, 24, 14, 30, 45);
    expect(service.getSeconds(date)).to.equal('45');
  });

  it('should calculate hours difference from now', () => {
    const now = new Date();
    const previous3Hours = new Date(now.getTime() - (3 * 60 * 60 * 1000));
    expect(service.getHourToNow(previous3Hours)).to.equal('3');
  });

  it('should calculate days difference from now', () => {
    const now = new Date();
    const previous5Days = new Date(now.getTime() - (5 * 24 * 60 * 60 * 1000));
    expect(service.getDaysToNow(previous5Days)).to.equal('5');
  });

  it('should format date to custom string', () => {
    const date = new Date(2024, 4, 24, 14, 30, 45);
    expect(service.formatToDynamic(date, "DD/MM/YYYY HH:mm:ss")).to.equal('24/05/2024 14:30:45');
  });

  it('should validate a correct date', () => {
    const date = new Date();
    expect(service.isValidDate(date)).to.be.true;
  });
});