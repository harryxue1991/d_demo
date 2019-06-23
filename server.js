const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
   ctx.body = 'Hello docker, 我更新了。啦啦';
});

app.listen(3000);