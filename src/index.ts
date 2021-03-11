import "reflect-metadata";
import {createConnection} from "typeorm";
import {Avtomobil} from "./entity/Avtomobil";
import { Narushenie } from "./entity/Narushenie";
import { Pravi } from "./entity/Pravi";
import {Sobstvenik} from "./entity/Sobstvenik";

const express = require('express');
const app = express();

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    const sobstvenik = new Sobstvenik();
    const avtomobil = new Avtomobil();
    const narushenie = new Narushenie();
    const pravi = new Pravi();

    sobstvenik.adres = 'Adres1';
    sobstvenik.egn = '123455679';
    sobstvenik.ime = 'Sobstvenik 1';
    sobstvenik.knijka = '44444';
    sobstvenik.talon = '123123';
    
    avtomobil.regnomer = 'PP1234BC';
    avtomobil.cvqt = 'bql';
    avtomobil.marka = 'Mercedes';
    avtomobil.zakupen = new Date();
    avtomobil.sobstvenik = sobstvenik;
    
    narushenie.kod = '1';
    narushenie.vid = 'Leko';

    pravi.avtomobil = avtomobil;
    pravi.narushenie = narushenie;
    pravi.data = new Date();
    
    narushenie.pravi = [pravi];
    avtomobil.narusheniq = [pravi];
    sobstvenik.avtomobili = [avtomobil];

    await connection.manager.save(sobstvenik);
    await connection.manager.save(avtomobil);
    await connection.manager.save(narushenie);
    await connection.manager.save(pravi);

    app.get('/', (req, res) => {
        res.send(`${JSON.stringify(sobstvenik)}\n${JSON.stringify(avtomobil)}`);
    });

    app.listen(3000);

    console.log('Port 3000');

}).catch(error => console.log(error));

