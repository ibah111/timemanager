import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { errMessage } from 'src/utils/errorMessage';

@Injectable()
export class TimemanService {
  private readonly service_name: string = TimemanService.name;
  private readonly logger: Logger = new Logger(this.service_name);

  private readonly requestInstance = axios.create({
    baseURL: 'https://chat.nbkfinance.ru/',
  });

  private readonly webhooks = {
    open: 'https://chat.nbkfinance.ru/rest/4018/j4oy8n3fv3o9wfnb/timeman.open.json',
    close:
      'https://chat.nbkfinance.ru/rest/4018/63t8z12mq3o8hg16/timeman.close.json',
  };

  async open(): Promise<AxiosResponse> {
    this.logger.debug('Starting day');
    try {
      return await axios.post(this.webhooks.open);
    } catch (error) {
      throw new InternalServerErrorException(
        errMessage(error, this.service_name),
      );
    }

    //const request = this.requestInstance.post('timeman.open');
    //return request;
  }

  async close(): Promise<AxiosResponse> {
    this.logger.debug('Closing day');
    try {
      return await axios.post(this.webhooks.close);
    } catch (error) {
      throw new InternalServerErrorException(
        errMessage(error, this.service_name),
      );
    }
    //const request = this.requestInstance.post('timeman.close');
    //return request;
  }
}
