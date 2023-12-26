const JSONServer = require('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleWare = JSONServer.defaults()
const PORT = 3000 || process.env.PORT
MPServer.use(middleWare)
MPServer.use(router)

MPServer.listen(PORT ,()=>{
    console.log(`MP server started at PORT ${PORT}`);
})