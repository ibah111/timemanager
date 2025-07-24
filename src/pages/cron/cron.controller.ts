import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CronService } from './cron.service';
import { ApiResponse, CronConfig } from 'src/utils/interfaces';

@ApiTags('Cron')
@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  @ApiOperation({ summary: 'Получить конфигурацию крона' })
  @Get('config')
  getCronConfig(): CronConfig {
    return this.cronService.getCronConfig();
  }

  @ApiOperation({ summary: 'Ручной запуск открытия дня' })
  @Post('manual-open')
  async manualOpenDay(): Promise<ApiResponse> {
    return await this.cronService.manualOpenDay();
  }

  @ApiOperation({ summary: 'Ручной запуск закрытия дня' })
  @Post('manual-close')
  async manualCloseDay(): Promise<ApiResponse> {
    return await this.cronService.manualCloseDay();
  }
}
