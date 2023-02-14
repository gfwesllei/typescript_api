import * as express from 'express';
import * as bodyParser from 'body-parser'

import DataBase from './infra/db';
import newsController from './controller/newsController';

class StartUp {
    public app: express.Application;
    private dataBase: DataBase;
    private bodyParser;
    constructor(){
        this.app = express();
        this.dataBase = new DataBase();
        this.dataBase.createConnection();
        this.midler();
        this.routes();
    }   

    midler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}))

    }

    routes(){
        this.app.route('/').get((req,resp)=>{
            resp.send({versao: '0.0.1'})
        })
        this.app.route('/api/v1/news').get(newsController.get);
        this.app.route('/api/v1/news/:id').get(newsController.getById);
        this.app.route('/api/v1/news').post(newsController.create);
        this.app.route('/api/v1/news/:id').put(newsController.update);
        this.app.route('/api/v1/news/:id').delete(newsController.delete);

    }
}

export default new StartUp();