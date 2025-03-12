import http from 'http'

const port = process.env.PORT || 8080
console.log(`Hello CGI ${port}`)

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(`Hello Cgi from Cloud Run`)
}).listen(port, () => {
    console.log(`Server running at ${port}`)
})
