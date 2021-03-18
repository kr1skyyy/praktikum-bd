import "reflect-metadata";
import {createConnection} from "typeorm";

import {Avtomobil} from "./entity/Avtomobil";
import { Narushenie } from "./entity/Narushenie";
import { Pravi } from "./entity/Pravi";
import {Sobstvenik} from "./entity/Sobstvenik";

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

createConnection().then(async connection => {
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
    
    // narushenie.pravi = [pravi];
    // avtomobil.narusheniq = [pravi];
    // sobstvenik.avtomobili = [avtomobil];

    await connection.manager.save(sobstvenik);
    await connection.manager.save(avtomobil);
    await connection.manager.save(narushenie);
    await connection.manager.save(pravi);

    app.get('/', (req, res) => {
        res.send(`<pre>${[sobstvenik, avtomobil, narushenie, pravi].map((item) => {
            return `${JSON.stringify(item)}\n`;
        })}</pre>`);
    });

    app.get('/avtomobil(/:id)?', async (req, res) => {
        const { id } = req.params;
        const searchOptions = id in req.params ? {where: { regnomer: id }} : null;
        
        res.json(
            await connection.manager
                .getRepository('Avtomobil')
                .find(searchOptions)
        );
    });

    app.listen(4000);

    console.log('Port 4000');

}).catch(error => console.log(error));

