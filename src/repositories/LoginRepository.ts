import IMaiRepository from "../../config/IMaiRepository";
import MaiRepository from "../../config/MaiRepository";
import LoginModel from "../entities/LoginModel";
class LoginRepository{
    private repository=new MaiRepository()
    findAll(): Promise<Array<LoginModel>>{
        return this.repository.findAll(LoginModel) as Promise<LoginModel[]>
    }
}

export default LoginRepository