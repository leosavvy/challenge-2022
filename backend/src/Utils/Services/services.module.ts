import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './Prisma/prisma.service';

@Module({
    imports: [ConfigModule],
    providers: [PrismaService],
    exports: [PrismaService],
})
export class ServicesModule {}
