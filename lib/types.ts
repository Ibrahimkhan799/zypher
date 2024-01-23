import { Request, Response } from "express";

export type InitProps = {
  port: number;
  route: string;
};

export type SetRouteProps = {
  api: string;
  data: object | string | undefined | null | JSON;
};

export type ApiCallbackProps = {
  req: Request;
  res: Response;
};
