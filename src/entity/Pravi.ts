import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn} from "typeorm";
import { Avtomobil } from "./Avtomobil";
import { Narushenie } from "./Narushenie";

@Entity()
export class Pravi {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Avtomobil, avtomobil => avtomobil.regnomer)
        @JoinColumn()
        avtomobil: Avtomobil;

    @ManyToOne(type => Narushenie, narushenie => narushenie.pravi)
        @JoinColumn()
        narushenie: Narushenie;

    @Column({ type: 'date' })
    data: Date;

}
