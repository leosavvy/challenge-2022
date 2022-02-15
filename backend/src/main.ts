import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.listen(8000);
    Logger.log('Listening port 8000', 'APP');
}
bootstrap();
