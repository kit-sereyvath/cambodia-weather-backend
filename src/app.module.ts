import { Module } from '@nestjs/common';
import { WeatherDataModule } from './weather-data/weather-data.module';

@Module({
  imports: [WeatherDataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
