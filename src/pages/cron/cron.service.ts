import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TimemanService } from '../timeman/timeman.service';
import { webhooks } from 'src/utils/consts';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(private readonly timemanService: TimemanService) {}

  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  async openDayAutomatically(): Promise<void> {
    this.logger.log('Запуск автоматического открытия дня в 9:00');
    webhooks.open.forEach(async (webhook) => {
      await this.timemanService.open(webhook);
    });
  }

  @Cron(CronExpression.EVERY_DAY_AT_6PM)
  async closeDayAutomatically(): Promise<void> {
    this.logger.log('Запуск автоматического закрытия дня в 18:00');
    webhooks.close.forEach(async (webhook) => {
      await this.timemanService.close(webhook);
    });
  }
}
