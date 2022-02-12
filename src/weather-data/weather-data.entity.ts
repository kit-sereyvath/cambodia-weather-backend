import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WeatherData{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    province: string;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    temp: number;

    @Column({ nullable: true })
    feel_like: number;

    @Column({ nullable: true })
    min_temp: number;

    @Column({ nullable: true })
    max_temp: number;

    @Column({ nullable: true })
    pressure: number;

    @Column({ nullable: true })
    wind: number;

    @Column({ nullable: true })
    air_quality: number;

    @Column({ nullable: true })
    cloud: number;

    @Column({ nullable: true })
    humidity: number;
}