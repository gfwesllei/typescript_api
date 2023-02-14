import * as mongoose from 'mongoose';

class DataBase {
    
    private DB_URL = 'mongodb://mongoadmin:secret@mongo:27017/new_db?connectTimeoutMS=1000&authSource=admin';

    createConnection() {
        mongoose.connect(this.DB_URL)
            .then(() => console.log('Connection success.'))
            .catch(error => console.log(`Erro to coonnect database ${error}`));
    }
}

export default DataBase;