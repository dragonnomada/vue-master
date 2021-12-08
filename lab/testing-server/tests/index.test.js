// npm install --save-dev chai
// npm install --save-dev chai-http
// npx mocha tests

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);
const serverUrl = 'http://localhost:5000';

describe('Testing Server: ', () => {
    it('Test Params', (done) => {
        chai.request(serverUrl)
            .get('/api/test/params/my-store/123')
            .end(function (error, response) {
                if (error) console.log(`${error}`)
                expect(error).equal(null)
                expect(response).to.have.status(200);
                console.log(response.text)
                done();
            })
    })
    
    it('Test Query', (done) => {
        chai.request(serverUrl)
            .get('/api/test/query?store=my-store&item=123')
            // .send({ id: 0, country: "Croacia", year: 2017, days: 10 })
            .end(function (error, response) {
                if (error) console.log(`${error}`)
                expect(error).equal(null)
                expect(response).to.have.status(200);
                console.log(response.text)
                done();
            })
    })
    
    it('Test Form', (done) => {
        chai.request(serverUrl)
            .post('/api/test/form')
            .type('form')
            .send({ store: 'my-store', item: 123 })
            .end(function (error, response) {
                if (error) console.log(`${error}`)
                expect(error).equal(null)
                expect(response).to.have.status(200);
                console.log(response.text)
                done();
            })
    })
    
    it('Test Json', (done) => {
        chai.request(serverUrl)
            .post('/api/test/form')
            .send({ store: 'my-store', item: 123 })
            .end(function (error, response) {
                if (error) console.log(`${error}`)
                expect(error).equal(null)
                expect(response).to.have.status(200);
                console.log(response.text)
                done();
            })
    })
})