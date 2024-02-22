import { ObjectLiteral,EntityTarget } from "typeorm";
import AppDataSource from "../src/data-source";
import IMaiRepository from "./IMaiRepository";
import { TMaiRepositorySign } from "./MaiTypes";

class MaiRepository<M extends ObjectLiteral,ID> implements IMaiRepository<M,ID>{
    findAll(entity: EntityTarget<M>): Promise<Array<M>> {
        return AppDataSource.manager.find(entity)
    }
    findOne<T>(entity: EntityTarget<M>, property: T): Promise<M> {
        throw new Error("Method not implemented.");
    }
    findById(entity: EntityTarget<M>, id: ID): M {
        throw new Error("Method not implemented.");
    }
    add(entity: EntityTarget<M>): boolean {
        throw new Error("Method not implemented.");
    }
    remove(entity: EntityTarget<M>): boolean {
        throw new Error("Method not implemented.");
    }
    onSign(entity: EntityTarget<M>, email: string, password: string): TMaiRepositorySign {
        throw new Error("Method not implemented.");
    }
   
    
}

export default MaiRepository