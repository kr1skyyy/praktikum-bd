import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";
import { Narushenie } from "./Narushenie";
import { Sobstvenik } from "./Sobstvenik";

@Entity()
export class Pravi {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ManyToOne(type => Sobstvenik, sobstvenik => sobstvenik.egn)
    sobstvenik: Sobstvenik;

    @Column()
    @ManyToOne(type => Narushenie, narushenie => narushenie.kod)
    narushenie: Narushenie;

    @Column({ type: 'date' })
    data: Date;

}
