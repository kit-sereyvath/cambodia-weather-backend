import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class WeatherData{
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    temp: number;

    @Column()
    feel_like: number;

    @Column()
    min_temp: number;

    @Column()
    max_temp: number;

    @Column()
    pressure: number;

    @Column()
    wind: number;

    @Column()
    air_quality: number;

    @Column()
    cloud: number;

    @Column()
    humidity: number;
}