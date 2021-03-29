import "reflect-metadata";
import {createConnection} from "typeorm";
import { Pravi } from "./entity/Pravi";
import importRecords from "./records/importRecords";

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/react-src/build')));

createConnection().then(async connection => {
    await importRecords(connection);
    const makeQuery = (repo, idKey) => async (req, res) => {
        const { id } = req.params;
        const searchOptions = id ? {where: { [idKey]: id }} : null;
        
        res.json(
            await connection.manager
                .getRepository(repo)
                .find(searchOptions)
        );
    };


    app.get('/client', (req, res) => {        
        res.sendFile(path.join(__dirname, '/react-src/build/index.html'));
    });
    
    app.get('/avtomobil(/:id)?', await makeQuery('Avtomobil', 'regnomer'));
    app.get('/sobstvenik(/:id)?', await makeQuery('Sobstvenik', 'egn'));
    app.get('/narushenie(/:id)?', await makeQuery('Narushenie', 'kod'));
    
    app.get('/pravi(/:id)?', async (req, res) => {
        const { id } = req.params;
        const { getJson } = req.query;
        const searchOptions = id ? {where: { id }} : {} as any;
        searchOptions.relations = ['avtomobil', 'narushenie'];
  
        const result = await connection.manager
            .getRepository('Pravi')
            .find(searchOptions);

        res.json(getJson ? result : result.map((pravi: Pravi) => ({
            id: pravi.id,
            data: pravi.data,
            avtomobil: pravi.avtomobil.regnomer,
            narushenie: pravi.narushenie.vid,
        })));
    });

    app.listen(4000);

    console.log('Port 4000');

}).catch(error => console.log(error));

