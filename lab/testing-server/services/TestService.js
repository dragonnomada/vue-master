function isValidStore(store) {
    return /[a-z][a-z\-]{3,11}/.test(store)
}

function isValidItem(item) {
    return /[1-9]\d{0,5}/.test(item)
}

async function testParams(params) {
    const { store, item } = params

    if (!isValidStore(store)) throw new Error('Invalid Store: Use only lowercase and hypen | Length: 4-12 | Starts with lowercase')
    
    if (!isValidItem(item)) throw new Error('Invalid Item: Use only digits | Max Length: 6 | Starts with 1-9')

    return {
        ok: true,
        params
    }
}

async function testQuery(query) {
    const { store, item } = query

    if (!isValidStore(store)) throw new Error('Invalid Store: Use only lowercase and hypen | Length: 4-12 | Starts with lowercase')
    
    if (!isValidItem(item)) throw new Error('Invalid Item: Use only digits | Max Length: 6 | Starts with 1-9')

    return {
        ok: true,
        query
    }
}

async function testBody(body) {
    const { store, item } = body

    if (!isValidStore(store)) throw new Error('Invalid Store: Use only lowercase and hypen | Length: 4-12 | Starts with lowercase')
    
    if (!isValidItem(item)) throw new Error('Invalid Item: Use only digits | Max Length: 6 | Starts with 1-9')

    return {
        ok: true,
        body
    }
}

module.exports = {
    testParams,
    testQuery,
    testBody
}