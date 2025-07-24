import { Module } from '@nestjs/common';
import TimemanModule from './timeman/timeman.module';
import { CronModule } from '../module/cron/cron.module';

@Module({
  imports: [TimemanModule, CronModule],
})
export default class PagesModule {}
