import { Request, Response } from 'express';
import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';




const getAllType = yup.object({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
});

type IQueryProps = yup.InferType<typeof getAllType>;

export const getAllValidation = Validation((getSchema) => ({
    query: getSchema(getAllType)
}));





export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log({ ...req.query });




    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
