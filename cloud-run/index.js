import http from 'http'

const port = process.env.PORT || 3000
console.log(`-- Do start --`)

http
    // MANAGE REQUEST
    .createServer((req, res) => {
        console.log(`-- Request --`)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(`Hello Cgi from Cloud Run`)
    })
    // LISTEN
    .listen(port, () => {
        console.log(`-- Server running at ${port} --`)
    })
