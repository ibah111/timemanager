import { Logger } from '@nestjs/common';

export const errMessage = (error: unknown, service_name: string): string => {
  const logger = new Logger(service_name);
  const error_message =
    error instanceof Error ? error.message : 'Unknown error';
  logger.error(error_message);
  return error_message;
};
