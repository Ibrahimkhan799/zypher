import { ApiCallbackProps, InitProps, SetRouteProps } from "./types";
import { express, router, app } from "./variables";

export function init({ port = 3000, route = "/" }: InitProps): void {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  app.use(route, router);
}

export function setRoute({
  api,
  data = "Just Created a Simple route using Serverifier",
}: SetRouteProps): void {
  router.get(api, ({ req, res }: ApiCallbackProps) => {
    res.send(data);
  });
}
