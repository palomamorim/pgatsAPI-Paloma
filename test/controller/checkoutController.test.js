const request = require('supertest');
const sinon = require('sinon');
const {expect} = require('chai');

const app = require('../../rest/app');

describe('Checkout Controller', () => {
    describe('POST /api/checkout', () => {       
        it('Valida token inválido', async() => {
            const resposta = await request(app)
                .post('/api/checkout')
                .send({
                    productId: 1,
                    quantity: 3
            });

            expect(resposta.status).to.equal(401);
            expect(resposta.body).to.have.property('error', 'Token inválido');
            
            sinon.restore();
        });
    })
    
})