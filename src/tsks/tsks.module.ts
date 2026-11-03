import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TsksController } from './tsks.controller.js';
import { TsksService } from './tsks.service.js';
import { RequestLoggerMiddleware } from '../common/request-logger.middleware.js';

@Module({
  controllers: [TsksController],
  providers: [TsksService]
})
export class TsksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // You can configure middleware here if needed
    consumer.apply(RequestLoggerMiddleware).forRoutes(TsksController);
  }
}
