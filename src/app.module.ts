import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RideRequestModule } from './ride-request/ride-request.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'dashaDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Использовать только на этапе разработки!
    }),
    AuthModule,
    RideRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
