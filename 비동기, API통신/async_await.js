const fs = require("fs");

async function loadFile() {
  try {
    const data = await fs.promises.readFile("./test.txt", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadFile();
