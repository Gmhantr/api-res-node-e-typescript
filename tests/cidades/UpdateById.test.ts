import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - UpdadeteByID', () => {



    it('Atualiza registro', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'gustavo' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
            .put(`/cidades/${res1.body}`)
            .send({ nome: 'gustavo pacheco delazari' });

        expect(resBuscada.statusCode).toEqual(StatusCodes.NO_CONTENT);

    });

    it('tenta atualizar registro inexistente ', async () => {

        const res1 = await testServer
            .put('/cidades/99999')
            .send({ nome: 'gustavao' });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');



    });


});

