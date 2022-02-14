import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherDataModule } from './weather-data/weather-data.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`]
    }),
    WeatherDataModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!" + configService.get('STAGE'))
        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? {rejectUnauthorized: false}: null,
          },
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        }
      }
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
