import { EntityRepository, Repository } from "typeorm";
import { WeatherDAtaDto } from "./weather-data.dto";
import { WeatherData } from "./weather-data.entity";

@EntityRepository(WeatherData)
export class WeatherDataRepository extends Repository<WeatherData>{
    async insertWeatherData(weatherDAtaDto: WeatherDAtaDto): Promise<WeatherData>{
        const { province } = weatherDAtaDto;
        const weatherData = this.create({
            province,
            date: "", 
            time: "", 
            description: "", 
            temp: null, 
            feel_like: null, 
            min_temp: null, 
            max_temp: null, 
            pressure: null, 
            wind: null, 
            air_quality: null, 
            cloud: null, 
            humidity: null
        });
        await this.save(weatherData);
    
        return weatherData;
    }
}