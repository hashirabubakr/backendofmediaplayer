const jsonServer = require('json-server')
const mediaPlayerServer=jsonServer.create()
const router = jsonServer.router('db.json')
const middleware=jsonServer.defaults()

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

const port=5000 || process.env.PORT 
mediaPlayerServer.listen(port,()=>{
    console.log(`started at ${port} waiting for req`);
})