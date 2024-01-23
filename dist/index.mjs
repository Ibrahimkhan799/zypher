var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// lib/variables.ts
var express = __require("express");
var router = express.Router();
var app = express();

// lib/functions.ts
function init({ port = 3e3, route = "/" }) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  app.use(route, router);
}
function setRoute({
  api,
  data = "Just Created a Simple route using Serverifier"
}) {
  router.get(api, ({ req, res }) => {
    res.send(data);
  });
}
export {
  app,
  express,
  init,
  router,
  setRoute
};
