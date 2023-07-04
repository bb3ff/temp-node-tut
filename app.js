const sayHi = require('./module1.js')
const friends= require('./module2.js')
const data= require('./module4.js')

sayHi('John')


console.log(friends.john)

console.log(data.sayHi('John'))

// os built-in module

const os = require('os')

const user= os.userInfo()
console.log(user)

console.log(`The system Uptime is ${os.uptime()}`)

const currentOS ={
    freeMem :  os.freemem(),
    totalMem: os.totalmem(),
    type: os.type(),
    release :os.release()
}

console.log(currentOS.freeMem, currentOS.totalMem, currentOS.type, currentOS.release)

// path built-in module 


const path = require('path')

console.log(path.sep) // result= "\"

const newPath= path.join('/content/hello/text.txt')
console.log(newPath)

const base = path.basename(newPath)
console.log(base)

const absolute= path.resolve(__dirname, 'content', 'subfolder', 'hello.txt')
console.log(absolute)

// http module 

const http = require('http')

const server= http.createServer((req, res) => { // createServer function needs a callbacks (request, response)
    if (req.url === '/'){
        res.write('Welcome to my website')
        res.end()
        
    }
    if (req.url === '/about'){
        res.end('This is our brief introduction')
    }
     
    res.end(
        `<h1>Oops! Something went wrong </h1>
        <a href='/'> Homepage </a>`
        
    )
})
server.listen(5000) //portal 

// sync fs built-in module 
const {readFileSync, writeFileSync} = require('fs')

const first= readFileSync('./content/text.txt', 'utf8')
const second= readFileSync('./content/number.txt', 'utf8')

const result= writeFileSync(
    './content/result-sync.txt', `Hello ${first}, ${second}`, {flag: 'a'}
)

// async fs built-in module 


