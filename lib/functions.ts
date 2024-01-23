import { ApiCallbackProps, api, data, port, route } from "./types";
import { router, app } from "./variables";

function init(port?: port, route?: route): void {
  port = port || 3000;
  route = route || "/";
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  app.use(route, router);
}

function setRoute(api: api, data?: data): void {
  data = data || "Just Created a new route using Serverifier.";
  router.get(api, ({ req, res }: ApiCallbackProps) => {
    res.send(data);
  });
}

export const Serverifier = {
  setRoute,
  init,
};
