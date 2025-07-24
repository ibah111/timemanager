import { Body, Controller, Post } from '@nestjs/common';
import { TimemanService } from './timeman.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/utils/interfaces';
import { WebhookDto } from './dto/webhook.dto';

@ApiTags('Time manager')
@Controller('timeman')
export class TimemanController {
  constructor(private readonly timemanService: TimemanService) {}

  @ApiOperation({ summary: 'Открыть день' })
  @Post('open')
  async open(@Body() body: WebhookDto): Promise<ApiResponse> {
    return await this.timemanService.open(body.webhook);
  }

  @ApiOperation({ summary: 'Закрыть день' })
  @Post('close')
  async close(@Body() body: WebhookDto): Promise<ApiResponse> {
    return await this.timemanService.close(body.webhook);
  }
}
