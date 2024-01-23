import { Request, Response } from 'express';

type InitProps = {
    port: number;
    route: string;
};
type SetRouteProps = {
    api: string;
    data: object | string | undefined | null | JSON;
};
type ApiCallbackProps = {
    req: Request;
    res: Response;
};

declare function init({ port, route }: InitProps): void;
declare function setRoute({ api, data, }: SetRouteProps): void;

declare const express: any;
declare const router: any;
declare const app: any;

export { type ApiCallbackProps, type InitProps, type SetRouteProps, app, express, init, router, setRoute };
