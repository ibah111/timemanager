import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import TimemanModule from '../timeman/timeman.module';

@Module({
  imports: [ScheduleModule.forRoot(), TimemanModule],
  providers: [CronService],
  exports: [CronService],
})
export class CronModule {}
