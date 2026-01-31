const request = require('supertest');
const {expect} = require('chai');


describe('Checkout Controller', () => {
    describe('POST /api/checkout', () => {       
        it('Valida token inválido', async() => {
            const resposta = await request('http://localhost:3000')
                .post('/api/checkout')
                .send({
                    productId: 1,
                    quantity: 3
            });

            expect(resposta.status).to.equal(401);
            expect(resposta.body).to.have.property('error', 'Token inválido');
            
        });
    })
    
})