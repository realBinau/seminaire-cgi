import http from 'http'

const port = process.env.PORT || 3000
console.log(`-- Do setup --`)

http
    // MANAGE REQUEST
    .createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        console.log(`-- Request --`)
        res.end(`Hello Cgi from Cloud Run`)
    })
    // LISTEN
    .listen(port, () => {
        console.log(`-- Server running at ${port} --`)
    })
