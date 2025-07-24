import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import axios from 'axios';
import { errMessage } from 'src/utils/errorMessage';
import { ApiResponse } from 'src/utils/interfaces';

@Injectable()
export class TimemanService {
  private readonly service_name: string = TimemanService.name;
  private readonly logger: Logger = new Logger(this.service_name);

  async open(webhook: string): Promise<ApiResponse> {
    this.logger.debug('Starting day');
    try {
      const response = await axios.post(webhook);
      return {
        success: true,
        data: response.data,
        status: response.status,
        message: 'Day started successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException(
        errMessage(error, this.service_name),
      );
    }
  }

  async close(webhook: string): Promise<ApiResponse> {
    this.logger.debug('Closing day');
    try {
      const response = await axios.post(webhook);
      return {
        success: true,
        data: response.data,
        status: response.status,
        message: 'Day closed successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException(
        errMessage(error, this.service_name),
      );
    }
  }
}
