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
    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro nao encontrado'
        }
    });




    return res.status(StatusCodes.NO_CONTENT).send();
};
