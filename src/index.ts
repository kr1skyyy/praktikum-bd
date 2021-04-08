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
    // await importRecords(connection);
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
        const { json } = req.query;
        const searchOptions = id ? {where: { id }} : {} as any;
        searchOptions.relations = ['avtomobil', 'narushenie'];
  
        const result = await connection.manager
            .getRepository('Pravi')
            .find(searchOptions);

        res.json(json ? result : result.map((pravi: Pravi) => ({
            id: pravi.id,
            data: pravi.data,
            avtomobil: pravi.avtomobil.regnomer,
            narushenie: pravi.narushenie.vid,
        })));
    });

    app.post('/create/:resource', async (req, res) => {
        const { body } = req;
        const { resource } = req.params;
        let response = {} as any;

        try {
            const newEntity = await connection.getRepository(resource).create(body);
            if (newEntity) await connection.manager.save(newEntity);
            response.success = true;
        } catch (err) {
            response.error = err;
        }
        
        res.json(response);
    });

    app.post('/edit/:resource', async (req, res) => {
        try {
            const { resource } = req.params;
            const { body } = req;
            console.log(JSON.parse(body));
            
            const { newEntity, oldEntity } = JSON.parse(body);
            let found = await connection.manager.getRepository(resource).find(oldEntity);
            if (found) {
                found = newEntity;
                await connection.manager.save(found);
            }
            res.json({success: true});
        } catch (err) {
            res.json({success: false, error: err});
        }
    });

    app.listen(4000);

    console.log('Port 4000');

}).catch(error => console.log(error));

