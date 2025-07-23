import { Controller, Post } from '@nestjs/common';
import { TimemanService } from './timeman.service';
import { AxiosResponse } from 'axios';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Time manager')
@Controller('timeman')
export class TimemanController {
  constructor(private readonly timemanService: TimemanService) {}

  @Post('open')
  async open(): Promise<AxiosResponse> {
    return await this.timemanService.open();
  }

  @Post('close')
  async close() {
    return await this.timemanService.close();
  }
}
