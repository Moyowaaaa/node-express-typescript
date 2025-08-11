import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(PORT, () => `running on port${PORT}`);
