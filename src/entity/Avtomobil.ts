import {Entity, Column, ManyToOne, PrimaryColumn, OneToMany} from "typeorm";
import { Pravi } from "./Pravi";
import { Sobstvenik } from "./Sobstvenik";

@Entity()
export class Avtomobil {

    @PrimaryColumn()
    regnomer: string;

    @Column()
    marka: string;

    @Column()
    cvqt: string;

    @Column({type: 'date'})
    zakupen: Date;

    @ManyToOne(type => Sobstvenik, sobstvenik => sobstvenik.avtomobili)
    sobstvenik: Sobstvenik;

    @OneToMany(type => Pravi, pravi => pravi.avtomobil)
    narusheniq: Pravi[];
}
