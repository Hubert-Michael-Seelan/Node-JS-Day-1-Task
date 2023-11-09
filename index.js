const fs = require("fs/promises");
const express = require("express");
const HTTP_SERVER = express();
const PORT = 4000;

const content = new Date().toString().replace(/[:.]/g, "-");
const path = `./Files/${content}.txt`

async function createFile() {
  try {
    await fs.writeFile(path , content);

    console.log("hey all");
  } catch (error) {
    console.log(err);
  }
}
createFile()

HTTP_SERVER.listen(PORT, "https://nodejs-task-1-lgvg.onrender.com", () => {
  console.log("Listening to port", PORT);
});

HTTP_SERVER.use("/", (req, res, next) => {
  console.log("Request Hitted");
  return res.status(200).json({
    message: "Request Hitted Successfully"
  })
});