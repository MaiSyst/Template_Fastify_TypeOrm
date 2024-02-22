import { EntityTarget, ObjectLiteral } from "typeorm";
import { TMaiRepositorySign } from "./MaiTypes";

abstract class IMaiRepository<M extends ObjectLiteral,ID>{
    abstract findAll(entity:EntityTarget<M>): Promise<Array<M>>;
    abstract findOne<T>(entity: EntityTarget<M>,property:T):Promise<M>;
    abstract findById(entity: EntityTarget<M>,id:ID):M;
    abstract add(entity: EntityTarget<M>):boolean;
    abstract remove(entity: EntityTarget<M>):boolean;
    abstract onSign(entity: EntityTarget<M>,email:string,password:string):TMaiRepositorySign
}

export default IMaiRepository