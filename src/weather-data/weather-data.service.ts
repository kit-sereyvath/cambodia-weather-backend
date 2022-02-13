import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchParams } from './search-param.dto';
import { WeatherDAtaDto } from './weather-data.dto';
import { WeatherDataModel } from './weather-data.model';
import { WeatherDataRepository } from './weather-data.repository';

@Injectable()
export class WeatherDataService {

    constructor(
        @InjectRepository(WeatherDataRepository)
        private weatherDataRepository: WeatherDataRepository
        ){}

    getWeatherData(searhcParams: SearchParams): Promise<WeatherDataModel[]>{
        return this.weatherDataRepository.getWeatherData(searhcParams);
    }

    insertWeatherData(weatherDataDto: WeatherDAtaDto): Promise<WeatherDataModel>{
        return this.weatherDataRepository.insertWeatherData(weatherDataDto)
    }

    updateWeatherData(weatherDataDto: WeatherDAtaDto): Promise<string>{
        return this.weatherDataRepository.updateWeatherData(weatherDataDto);
    }

    deleteWeatherData(searchParams: SearchParams): Promise<string>{
        return this.weatherDataRepository.deleteWeatherData(searchParams);
    }
}
