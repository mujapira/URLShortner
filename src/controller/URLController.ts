import { URLModel } from "../dababase/model/URL";
import { Request, Response } from "express";
import shortId from 'shortid';
import { config } from "../config/Constants";

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //Verificar a existencia da URL
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            response.json(url)
            ReadableStreamDefaultController
        }
        //Criar HASH
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        //Salvar no banco
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        //Retornar a URL
        response.json(newURL)
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })
        if (url) {
            response.redirect(url.originURL)
            return
        }
        response.status(400).json({error:"deu ruim"})
    }
}