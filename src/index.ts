import "reflect-metadata";
import {createConnection} from "typeorm";

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

createConnection().then(async connection => {
    // const sobstvenik = new Sobstvenik();
    // const avtomobil = new Avtomobil();
    // const narushenie = new Narushenie();
    // const pravi = new Pravi();

    // sobstvenik.adres = 'Adres1';
    // sobstvenik.egn = '123455679';
    // sobstvenik.ime = 'Sobstvenik 1';
    // sobstvenik.knijka = '44444';
    // sobstvenik.talon = '123123';
    
    // avtomobil.regnomer = 'PP1234BC';
    // avtomobil.cvqt = 'bql';
    // avtomobil.marka = 'Mercedes';
    // avtomobil.zakupen = new Date();
    // avtomobil.sobstvenik = sobstvenik;
    
    // narushenie.kod = '1';
    // narushenie.vid = 'Leko';

    // pravi.avtomobil = avtomobil;
    // pravi.narushenie = narushenie;
    // pravi.data = new Date();
    
    // // narushenie.pravi = [pravi];
    // // avtomobil.narusheniq = [pravi];
    // // sobstvenik.avtomobili = [avtomobil];

    // await connection.manager.save(sobstvenik);
    // await connection.manager.save(avtomobil);
    // await connection.manager.save(narushenie);
    // await connection.manager.save(pravi);

    const makeQuery = (repo, idKey) => async (req, res) => {
        const { id } = req.params;
        const searchOptions = id ? {where: { [idKey]: id }} : null;
        
        res.json(
            await connection.manager
                .getRepository(repo)
                .find(searchOptions)
        );
    };

    app.get('/avtomobil(/:id)?', await makeQuery('Avtomobil', 'regnomer'));
    app.get('/sobstvenik(/:id)?', await makeQuery('Sobstvenik', 'egn'));
    app.get('/pravi(/:id)?', await makeQuery('Pravi', 'id'));
    app.get('/narushenie(/:id)?', await makeQuery('Narushenie', 'kod'));

    app.listen(4000);

    console.log('Port 4000');

}).catch(error => console.log(error));

