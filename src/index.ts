import { URLController } from './controller/URLController';
import { MongoConnection } from './dababase/MongoConnection';
import express from 'express';

const api = express();
api.use(express.json());
const database = new MongoConnection();
const urlController = new URLController();

api.post('/shorten', urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(3000, () => console.log('toma'));