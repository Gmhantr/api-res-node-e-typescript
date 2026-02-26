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
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);

    return res.status(StatusCodes.OK).json([{
        id: 1,
        nome: 'gustavoaa',
    }]);

};
