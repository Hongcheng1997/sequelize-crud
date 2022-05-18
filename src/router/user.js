module.exports = ({ router, models }) => {
  const { User } = models;

  router.get("/user/list", async (ctx) => {
    const list = await User.findAll();
    ctx.body = list;
  });

  router.post("/user/create", async (ctx) => {
    const { firstName, lastName } = ctx.request.body;
    if (!firstName) {
      ctx.throw(400, "firstName required");
      return;
    }
    await User.create({ firstName, lastName });
    ctx.body = {
      message: "ok",
      status: 200,
    };
  });

  router.post("/user/update", async (ctx) => {
    const { userId, firstName, lastName } = ctx.request.body;
    if (!firstName) {
      ctx.throw(400, "firstName required");
      return;
    }
    if (!userId) {
      ctx.throw(400, "userId required");
      return;
    }
    await User.update({ firstName, lastName }, { where: { id: userId } });
    ctx.body = {
      message: "ok",
      status: 200,
    };
  });

  router.post("/user/delete", async (ctx) => {
    const { userId } = ctx.request.body;
    if (!userId) {
      ctx.throw(400, "userId required");
      return;
    }
    await User.destroy({ where: { id: userId } });
    ctx.body = {
      message: "ok",
      status: 200,
    };
  });
};
