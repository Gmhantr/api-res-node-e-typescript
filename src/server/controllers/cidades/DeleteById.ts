import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';





export interface IParamProps {
    id?: number;
}



export const DeleteByIdValidation = Validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.number().integer().required().moreThan(0),

    }))
}));





export const DeleteById = async (req: Request<IParamProps>, res: Response) => {
    if (Number(req.params.id) === 99999) return res.status(StatusCodes.NOT_FOUND).json({
        errors: {
            default: 'Registro nao encontrado'
        }
    });




    return res.status(StatusCodes.NO_CONTENT).send('Exclusao feita com Sucesso');
};
