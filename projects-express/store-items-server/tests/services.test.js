const { assert } = require('console');
const ItemService = require('../services/ItemService')

const { expect } = require('chai');
const should = require('chai').should()

const testName = `test-${Math.random().toString(32).slice(2)}`

describe('Test ItemService...', () => {
    it('Connecting', (done) => {
        Promise.resolve().then(async () => {
            await ItemService.init({
                host: 'localhost',
                user: 'root',
                password: 'password',
                database: 'store'
            })
            done()
        })
    })

    it('Add Item', (done) => {
        Promise.resolve().then(async () => {
            const item = await ItemService.addItem(testName, 'created')

            console.log(item)

            // await expect(item).to.have.property('itemId').with.to.be.a('string')
            // expect(item).to.have.property('name').with.to.equal('test-1')
            // expect(item).to.have.property('status').with.to.equal('CREATED')

            assert(Object.keys(item).includes('itemId'), 'Key itemId not found')
            assert(Object.keys(item).includes('name'), 'Key name not found')
            assert(Object.keys(item).includes('status'), 'Key status not found')
            // assert(item.name === 'test-1', 'Name is not "test-1"')
            assert(item.status === 'CREATED', 'Status is not "CREATED"')

            done()
        }).catch(done)
    });

    it('Get Items', (done) => {
        Promise.resolve().then(async () => {
            const items = await ItemService.getItemsByNameAndStatus(testName, 'created')

            console.log(items)

            expect(items).lengthOf(1)

            done()
        }).catch(done)
    });
    
    it('Disconnecting', (done) => {
        Promise.resolve().then(async () => {
            await ItemService.deinit()

            done()
        })
    });

});
