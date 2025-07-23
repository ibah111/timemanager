import { Module } from '@nestjs/common';
import TimemanModule from './timeman/timeman.module';

@Module({
  imports: [TimemanModule],
})
export default class PagesModule {}
