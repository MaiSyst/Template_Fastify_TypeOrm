import { DataSource } from "typeorm";
import LoginModel from "./entities/LoginModel";

export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    username:"root",
    password:"Newstreet98@zolki",
    database:"fastify_dbTypeOrm",
    synchronize:true,
    logging:true,
    entities:[LoginModel],
    subscribers:[],
    migrations:[]
})

AppDataSource.initialize().then(value=>{
    console.log("Database forwards with success")
}).catch(err=>console.error(err))

export default AppDataSource;