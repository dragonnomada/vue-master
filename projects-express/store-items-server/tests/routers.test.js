// npm install --save-dev chai
// npm install --save-dev chai-http
// npx mocha tests/

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);
const serverUrl = 'http://localhost:5000';

describe('Testing Server: ', () => {
    it('Add Items', (done) => {
        chai.request(serverUrl)
            .put('/api/items/add')
            .send({ name: 'test-3', status: 'removed' })
            .end(function (error, response) {
                if (error) console.log(`${error}`)
                expect(error).equal(null)
                expect(response).to.have.status(200);
                const item = JSON.parse(response.text)
                console.log(item)
                // expect(item).equals({  })
                done();
            })
    })
    it('Check Items with status', (done) => {
        chai.request(serverUrl)
            .get('/api/items/test-3/removed')
            .end(function (error, response) {
                if (error) console.log(`${error}`)
                expect(error).equal(null)
                expect(response).to.have.status(200);
                const items = JSON.parse(response.text)
                console.log(items)
                expect(items).lengthOf(1)
                done();
            })
    })
})