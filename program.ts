import StartUp from './startUp';
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env)

let port = process.env.PORT || '3050'

StartUp.app.listen(port,function(){
    console.log(`Server running at port ${port}`)
})