const fs = require('fs').promises

async function write(path, content){
    try {
        await fs.writeFile(path, content)
    } catch (error) {
        console.error(error)
    }
}

async function read(path) {
    try {
        const data = await fs.readFile(path)
        return data.toString()
    } catch (error) {
        console.error(error)
    }
}

exports.write = write
exports.read = read