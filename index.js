#!/usr/bin/env node

let program = require("commander");
let fs = require("fs");
let foods = require("./data/foods");
let animals = require("./data/animals");

program
  .version(require("./package.json").version, "-v, --version")
  .description("Foldie the folder generator");

program.command("make").action(() => {
  let randomFood = randomItem(foods);
  let randomAnimal = randomItem(animals);
  let folderName = (randomFood + "_" + randomAnimal).toLowerCase();
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("foldie made", folderName);
  } else {
    console.log("cannot make folder");
  }
});

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

program.parse(process.argv);
