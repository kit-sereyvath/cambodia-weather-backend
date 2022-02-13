import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WeatherData{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    province: string;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column({ nullable: true })
    description: string;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    temp: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    feel_like: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    min_temp: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    max_temp: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    pressure: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    wind: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    air_quality: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    cloud: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: true })
    humidity: number;
}