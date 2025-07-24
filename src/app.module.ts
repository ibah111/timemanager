import { Module } from '@nestjs/common';
import PagesModule from './pages/pages.module';
import ModulesModule from './module/modules.module';

@Module({
  imports: [PagesModule, ModulesModule],
})
export class AppModule {}
