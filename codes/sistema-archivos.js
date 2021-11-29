const fs = require('fs')
const path = require('path')

const filenames = fs.readdirSync(process.cwd())

console.log(filenames)

for (let filename of filenames) {
    const stat = fs.statSync(path.join(process.cwd(), filename));

    console.log(filename)

    console.log('Is File:', stat.isFile())
    console.log('Is Directory:', stat.isDirectory())

    if (stat.isFile()) {
        console.log('Bytes:', stat.size)
        console.log('Modify at:', stat.ctime)
        console.log('Created at:', stat.birthtime)
        
        const content = fs.readFileSync(path.join(process.cwd(), filename), 'utf-8')

        console.log(content.slice(0, 200))
    }

    console.log()
}