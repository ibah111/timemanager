import { SwaggerCustomOptions, SwaggerDocumentOptions } from '@nestjs/swagger';

export function getSwaggerOptions() {
  const options: SwaggerDocumentOptions = {};
  return options;
}
export function getSwaggerOptionsCustom() {
  const options: SwaggerCustomOptions = {};
  options.customSiteTitle = 'Timemanager-application';
  options.validatorUrl = '';
  return options;
}
