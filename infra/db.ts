import * as mongoose from 'mongoose';

import { ConnectOptions } from 'mongoose';
class DataBase {
    private DB_URL ='mongodb://mongoadmin:secret@127.0.0.1:27017/test?connectTimeoutMS=1000&authSource=admin';

    createConnection() {
        mongoose.connect(this.DB_URL)
        .then(()=> console.log('Connection success.'))
        .catch(error=> console.log(`Erro to coonnect database ${error}`));
    }
}

export default DataBase;