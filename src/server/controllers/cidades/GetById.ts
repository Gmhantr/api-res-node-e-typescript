import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';


export interface IParamProps {
    id?: number;
}

export const getByIdValidation = Validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object({
        id: yup.number().integer().required().moreThan(0),
    })),
}));



export const getById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params);




    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
