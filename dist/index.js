"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  app: () => app,
  express: () => express,
  init: () => init,
  router: () => router,
  setRoute: () => setRoute
});
module.exports = __toCommonJS(lib_exports);

// lib/variables.ts
var express = require("express");
var router = express.Router();
var app = express();

// lib/functions.ts
function init(port, route) {
  port = port || 3e3;
  route = route || "/";
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  app.use(route, router);
}
function setRoute(api, data) {
  data = data || "Just Created a new route using Serverifier.";
  router.get(api, ({ req, res }) => {
    res.send(data);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app,
  express,
  init,
  router,
  setRoute
});
