import { ApiProperty } from '@nestjs/swagger';

export class WebhookDto {
  @ApiProperty({
    description: 'Webhook',
    example: '',
  })
  webhook: string;
}
