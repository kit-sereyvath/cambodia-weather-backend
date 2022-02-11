import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherDataController } from './weather-data.controller';
import { WeatherDataRepository } from './weather-data.repository';
import { WeatherDataService } from './weather-data.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WeatherDataRepository])
  ],
  controllers: [WeatherDataController],
  providers: [WeatherDataService],
})
export class WeatherDataModule {}
