import { FastifyInstance } from "fastify"
import {fastify} from 'fastify'
import LoginController from "./src/controllers/LoginController"
import AppDataSource from "./src/data-source"
class App{
    private static app: FastifyInstance = fastify({logger:true})
    static run(){
        this.initMiddleware()
        this.initController()
        this.init()
    }
    private static initMiddleware(){

    }
    private static initController(){
        LoginController.run(this.app)
    }
    private static init(){
        
        this.app.listen({port:3000},(error,address)=>{
            if(error) console.error(error)
            console.log(`Server is running on ${address}`)
        })
    }
}
export default App