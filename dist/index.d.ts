import { Request, Response } from 'express';

type port = number;
type route = string;
type api = string;
type data = object | string | undefined | null | JSON;
type ApiCallbackProps = {
    req: Request;
    res: Response;
};

declare function init(port?: port, route?: route): void;
declare function setRoute(api: api, data?: data): void;

declare const express: any;
declare const router: any;
declare const app: any;

export { type ApiCallbackProps, type api, app, type data, express, init, type port, type route, router, setRoute };
