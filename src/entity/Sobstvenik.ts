import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import { Avtomobil } from "./Avtomobil";

@Entity()
export class Sobstvenik {
    
    @PrimaryColumn()
    egn: string;

    @Column()
    ime: string;

    @Column()
    adres: string;

    @Column()
    talon: string;

    @Column()
    knijka: string;

    @OneToMany(type => Avtomobil, avtomobil => avtomobil.regnomer, { cascade: true })
    avtomobili: Avtomobil[];
}
