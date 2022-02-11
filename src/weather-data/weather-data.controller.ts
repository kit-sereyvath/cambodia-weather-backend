import { Controller, Get } from '@nestjs/common';
import { WeatherDataModel } from './weather-data.model';
import { WeatherDataService } from './weather-data.service';

@Controller('weather-data')
export class WeatherDataController {

    constructor(private weatherDataService: WeatherDataService){}

    @Get('/:id')
    async getWeatherDataByID(id: string): Promise<WeatherDataModel>{
        return await this.weatherDataService.getWeatherDataById(id)
    }
}
