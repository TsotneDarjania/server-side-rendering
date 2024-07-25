import express from "express";
import fs from "fs";
import { getBlogs } from "../uitls/helper";
import { getFile } from "../uitls/helper";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "view");

app.get("/", async (req, res) => {
  const homePage = await getFile("html/homepage.html");
  res.send(homePage);
});

app.get("/blogs", async (req, res) => {
  const blogs = await getBlogs();

  let number = "https://www.youtube.com/";

  //   const blogsPage = await getFile("html/blogs.html");
  res.render("blogs", { number });
});

export function startServer() {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}
