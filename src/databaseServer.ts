import express from "express";
import cors from "cors";
import { getFile } from "../uitls/helper";

const app = express();

app.use(cors());

app.get("/api/blogs", async (req, res) => {
  const blogs = await getFile("data/blogs.json");
  res.json(blogs);
});

export function startDatabaseServer() {
  app.listen(3001, () => {
    console.log("DatabaseServer started on port 3001");
  });
}
