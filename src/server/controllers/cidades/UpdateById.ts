import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';





export interface IUpdateProps {
    id?: number;
}

export interface IBodyProps {
    nome: string;
}


export const UpdateByIdValidation = Validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object({
        nome: yup.string().required().min(3),

    })),
    params: getSchema<IUpdateProps>(yup.object({
        id: yup.number().integer().required().moreThan(0),

    }))
}));





export const UpdateById = async (req: Request<IUpdateProps, {}, IBodyProps>, res: Response) => {
    console.log(req.params);
    console.log(req.body);




    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
