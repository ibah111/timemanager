import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { TimemanService } from '../../pages/timeman/timeman.service';
import { webhooks } from 'src/utils/consts';
import { CustomCronExpression } from 'src/utils/cron.config';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(private readonly timemanService: TimemanService) {}

  @Cron(CustomCronExpression.OPEN_DAY)
  async openDayAutomatically(): Promise<void> {
    this.logger.log('Запуск автоматического открытия дня в 9:00');
    webhooks.open.forEach(async (webhook) => {
      await this.timemanService.open(webhook);
    });
  }

  @Cron(CustomCronExpression.CLOSE_DAY)
  async closeDayAutomatically(): Promise<void> {
    this.logger.log('Запуск автоматического закрытия дня в 18:00');
    webhooks.close.forEach(async (webhook) => {
      await this.timemanService.close(webhook);
    });
  }
}
