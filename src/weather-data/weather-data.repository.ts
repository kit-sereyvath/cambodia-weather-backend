import { EntityRepository, Repository } from "typeorm";
import { WeatherData } from "./weather-data.entity";

@EntityRepository(WeatherData)
export class WeatherDataRepository extends Repository<WeatherData>{
    
}