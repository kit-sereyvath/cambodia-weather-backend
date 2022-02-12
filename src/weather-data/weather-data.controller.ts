import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WeatherDAtaDto } from './weather-data.dto';
import { WeatherDataModel } from './weather-data.model';
import { WeatherDataService } from './weather-data.service';

@Controller('weather-data')
export class WeatherDataController {

    constructor(private weatherDataService: WeatherDataService){}

    @Get('/:id')
    async getWeatherDataByID(@Param('id') id: string): Promise<WeatherDataModel>{
        return await this.weatherDataService.getWeatherDataById(id)
    }

    @Post()
    insertWeatherData(@Body() weatherDataDto: WeatherDAtaDto): Promise<WeatherDataModel>{
        return this.weatherDataService.insertWeatherData(weatherDataDto)
    }
}
