const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(8080, () => {
    console.log('JSON Server is running')
})


module.exports = server