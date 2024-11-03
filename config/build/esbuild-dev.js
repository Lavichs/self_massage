const ESBuild = require('esbuild')
const path = require('path')
const config = require('./esbuild-config')

const PORT = Number(process.env.PORT) || 3000;

let ctx = ESBuild.context({
    ...config
}).then(ctx => {
    ctx.watch({})
    ctx.serve({
        servedir: config.outdir,
        port: PORT
    }).then(() => {
        console.log('server started on http://localhost:' + PORT)
    }).catch(err => console.log(err))
})
