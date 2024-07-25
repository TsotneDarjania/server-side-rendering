import fs from "fs";

export async function getFile(path: string) {
  return await new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data.toString());
      }
    });
  });
}

export async function getBlogs() {
  return new Promise((res, rej) => {
    fetch("http://localhost:3001/api/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res(data);
      });
  });
}
