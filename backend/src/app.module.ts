import { Module } from '@nestjs/common';
import { APIModule } from './API/api.module';

@Module({
    imports: [APIModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
