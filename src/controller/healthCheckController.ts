import { Request, Response } from "express"

class HealthCheckerController {
    public async check(req: Request, res: Response){

        return res.json("Olá mundo!!!")
    }
}

export default new HealthCheckerController()