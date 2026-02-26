import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';


const BodyType = yup.object({
    nome: yup.string().required().min(3),
}).strict();

type ICidades = yup.InferType<typeof BodyType>;

export const createValidation = Validation((getSchema) => ({
    body: getSchema(BodyType),
}));


export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {
    console.log(req.body);




    return res.status(StatusCodes.CREATED).json(2);
};



//const validacao: yup.ObjectSchema<InterfaceCidade> = yup.object().shape({
//   nome: yup.string().required().min(3),
//}) req.query pegar coisas da query