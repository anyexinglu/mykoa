const Koa = require('koa');
const app = new Koa();
const { Readable } = require('stream')

const sleep = async (delay) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}

// response
app.use(async ctx => {
 ctx.type = 'text/html'
 ctx.status = 200
//  ctx.respond = false
//  ctx.res.write('hello world')
//  await sleep(2000)
//  ctx.res.write('text----------')
//  ctx.res.end()
const res = Readable.from([
    'hello-world',
    sleep(2000).then(() => {
        return 'text--------'
    })
])

ctx.body = res
});

app.listen(3000);
