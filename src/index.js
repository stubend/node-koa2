import fs from "fs";
import util from "util";

const readAsync = util.promisify(fs.readFile);

async function init () {
    let data = await readAsync("./package.json");

    data = JSON.parse(data);

    console.log(data.name);
}

init();