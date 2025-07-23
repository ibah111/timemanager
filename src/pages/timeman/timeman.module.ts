import { Module } from '@nestjs/common';
import { TimemanController } from './timeman.controller';
import { TimemanService } from './timeman.service';

@Module({
  controllers: [TimemanController],
  providers: [TimemanService],
})
export default class TimemanModule {}
