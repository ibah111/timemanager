export interface CronConfig {
  openTime: string;
  closeTime: string;
  enabled: boolean;
}

export interface CronTaskResult {
  taskName: string;
  success: boolean;
  message: string;
  timestamp: Date;
  error?: string;
}
