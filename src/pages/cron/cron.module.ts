import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronController } from './cron.controller';
import { CronService } from './cron.service';
import { TimemanModule } from '../timeman/timeman.module';

@Module({
  imports: [ScheduleModule.forRoot(), TimemanModule],
  controllers: [CronController],
  providers: [CronService],
  exports: [CronService],
})
export class CronModule {}
