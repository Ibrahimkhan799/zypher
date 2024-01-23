import { Request, Response } from "express";

export type port = number;
export type route = string;
export type api = string;
export type data = object | string | undefined | null | JSON;

export type ApiCallbackProps = {
  req: Request;
  res: Response;
};
