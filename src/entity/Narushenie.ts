import {Entity, PrimaryColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Pravi } from "./Pravi";

@Entity()
export class Narushenie {

    @PrimaryColumn()
    kod: string;

    @Column()
    vid: string;

    @OneToMany(type => Pravi, pravi => pravi.narushenie, { cascade: true })
    pravi: Pravi[];
}
