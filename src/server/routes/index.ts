import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();




router.get('/', (_, res) => {
    return res.send('ola mundo');
});


router.post('/teste', (req, res) => {
    console.log(req);

    return res.status(StatusCodes.ACCEPTED).json(req.body);
});


export { router };

//res.send - res.json - req.cookies
//req.header - req.params - req.query.teste - return res.status(200).json(req.body);