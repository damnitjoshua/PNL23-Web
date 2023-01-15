import type { NextApiRequest, NextApiResponse } from "next";

export default function getResults(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send("test");
}
