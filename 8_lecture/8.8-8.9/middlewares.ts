import { type Request, type Response, type NextFunction } from "express"

interface Body {
  id: number
  name: string
  email: string

}

export const logger = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const date = new Date();
  const padNumbers = (value: string | number): string =>
    String(value).padStart(2, "0");
  const body: Body = req.body;
  console.log(body);
  const dateStr = `${padNumbers(date.getHours())}:${padNumbers(
    date.getMinutes()
  )}:${padNumbers(date.getSeconds())}`;
  const method = req.method;
  const host = req.headers.host ?? "";
  const url = new URL(req.url, `http://${host}`);
  console.log(`${dateStr} ${method} ${url.pathname}`);
  next();
};

export const unknownEndpoint = (req: Request, res: Response): void => {
  const host = req.headers.host ?? "";
  const url = new URL(req.url, `http://${host}`);
  res.status(404).send({ error: `Endpoint ${url.pathname} does not exist` });
};