// DENTRO DO CONTROLLER IREI TER ACESSO AO REQUEST E RESPONSE. -> server -> controller -> service -> ...

import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin});

        return response.json(user)
    }
}

export { CreateUserController }

/**
 * server -> routes -> Controller -> Service (throw new Error) ----> Repassa
 * exerção para camada acima "Controller"
 * 
 */