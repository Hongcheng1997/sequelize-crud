const Koa = require("koa");
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
const routers = require("./router");
const models = require("./model");

const app = new Koa();

app.use(bodyParser());

routers({ router, models });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("ok");
});
