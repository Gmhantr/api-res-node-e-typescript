import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - Deleted', () => {



    it('Deleta um registro por id', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'gustavo' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagada = await testServer
            .delete(`/cidades/${res1.body}`);

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);

    });

    it('Validação registro inexistente ', async () => {

        const res1 = await testServer
            .delete('/cidades/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(res1.body).toHaveProperty('errors.default');



    });


});





