import { FastifyInstance } from "fastify/types/instance";
import LoginRepository from "../repositories/LoginRepository";

class LoginController {
    static run(app: FastifyInstance) {
        const loginRepo=new LoginRepository()
        app.register((instance, opts, next) => {
            this.register(instance)
            this.sign(instance)
            this.findAll(instance,loginRepo)
            next()
        }, { prefix: "/api" })
    }
    private static register(app: FastifyInstance) {
        app.post("/login/register", (request, reply) => {
            reply.status(200).send("Hello Login Register")
        })
    }
    private static sign(app: FastifyInstance) {
        app.post("/login/sign", (request, reply) => {
            reply.status(200).send("Hello Login Sign")
        })
    }
    private static findAll(app: FastifyInstance,repository:LoginRepository) {
        app.get("/login/findAll", async (request, reply) => {
            const res = await repository.findAll()
            reply.status(200).send(res)
        })
    }

}

export default LoginController