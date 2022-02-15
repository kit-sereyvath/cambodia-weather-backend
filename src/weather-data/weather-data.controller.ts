import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ResponseMessage } from 'src/res-message.dto';
import { SearchParams } from './search-param.dto';
import { WeatherDAtaDto } from './weather-data.dto';
import { WeatherDataModel } from './weather-data.model';
import { WeatherDataService } from './weather-data.service';

@Controller('weather-data')
export class WeatherDataController {

    constructor(private weatherDataService: WeatherDataService){}

    // @Get('/:id/')
    // async getWeatherData(@Param('id') id: string): Promise<WeatherDataModel>{
    //     return await this.weatherDataService.getWeatherDataById(id)
    // }

    @Get()
    async getWeatherData(@Query() searchParams: SearchParams): Promise<WeatherDataModel[]>{
        return this.weatherDataService.getWeatherData(searchParams);
    }

    @Post()
    insertWeatherData(@Body() weatherDataDto: WeatherDAtaDto): Promise<ResponseMessage>{
        return this.weatherDataService.insertWeatherData(weatherDataDto)
    }

    @Put()
    updateWeatherData(@Body() weatherDataDto: WeatherDAtaDto): Promise<ResponseMessage>{
        return this.weatherDataService.updateWeatherData(weatherDataDto);
    }

    @Delete()
    deleteWeatherData(@Query() serachParams: SearchParams): Promise<ResponseMessage>{
        return this.weatherDataService.deleteWeatherData(serachParams);
    }
}
