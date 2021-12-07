let count = 0

async function loadResource() {
    return {
        date: new Date(),
        hash: Math.random().toString(16).slice(2),
        count: ++count
    }
}

module.exports = {
    loadResource
}