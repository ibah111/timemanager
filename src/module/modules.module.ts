import { Module } from '@nestjs/common';
import TimemanModule from 'src/pages/timeman/timeman.module';

@Module({
  imports: [TimemanModule],
})
export default class ModulesModule {}
