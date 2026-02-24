import { Router } from 'express';
//import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';


const router = Router();




router.get('/', (_, res) => {
    return res.send('ola mundo');
});


router.post('/cidades',
    CidadesController.createValidation,
    CidadesController.create);

router.get('/cidades',
    CidadesController.getAllValidation,
    CidadesController.getAll);

router.get('/cidades/:id',
    CidadesController.getByIdValidation,
    CidadesController.getById);

router.put('/cidades/:id',
    CidadesController.UpdateByIdValidation,
    CidadesController.UpdateById);
router.delete('/cidades/:id',
    CidadesController.DeleteByIdValidation,
    CidadesController.DeleteById);



export { router };


//res.send - res.json - req.cookies
//req.header - req.params - req.query.teste - return res.status(200).json(req.body);
// http://localhost:3000/cidades?filter=teste