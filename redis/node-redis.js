const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const redis = require("redis");
const redisClient = redis.createClient(6379, "localhost");

const wrapper = require("co-redis");
const client = wrapper(redisClient);

client.on("ready", () => {
  console.log("redis ready ...");
});

// 首页路由
const router = new Router();

router.get("/create", async (ctx) => {

  // 清空商品
  await client.ltrim("goods", -1, 0);

  // 添加30个商品
  new Array(30).fill().forEach(async (v, i) => {
    await client.rpush("goods", i);
    console.log("添加商品:", i);
  });

  // redis llen
  const num = await client.llen("goods");
  console.log("抢购商品数量:", num);

  ctx.body = {
    ok: 1,
  };
});
router.get('/hmset',async(ctx)=>{
  await client.hmset('node',['key1','value1'])
  ctx.body = {
    ok: 1,
  };
})

app.use(router.routes());

// 监听端口
app.listen(3000, () => {
  console.log("listening on *:3000");
});