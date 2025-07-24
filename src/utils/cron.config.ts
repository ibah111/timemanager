import { CronConfig } from './interfaces';

export const cronConfig: CronConfig = {
  openTime: '0 9 * * *', // Каждый день в 9:00
  closeTime: '0 18 * * *', // Каждый день в 18:00
  enabled: true,
};

export const getCronExpression = (time: string): string => {
  const timeMap: Record<string, string> = {
    '9:00': '0 9 * * *',
    '18:00': '0 18 * * *',
    '8:00': '0 8 * * *',
    '17:00': '0 17 * * *',
  };

  return timeMap[time] || time;
};
