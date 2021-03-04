import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import { Pravi } from "./Pravi";

@Entity()
export class Narushenie {

    @PrimaryColumn()
    @OneToMany(type => Pravi, pravi => pravi.narushenie)
    kod: number;

    @Column()
    vid: string;

}
