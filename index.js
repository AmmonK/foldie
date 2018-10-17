#!/usr/bin/env node

let program = require("commander");
var fs = require("fs");
let food = require("./food");
let animal = require("./animal");

program.version("0.1.0").description("Folder Generator");

program.command("make").action(() => {
  //console.log(process.cwd());
  let randomFood = food[Math.floor(Math.random() * food.length)];
  let randomAnimal = animal[Math.floor(Math.random() * animal.length)];
  let folderName = randomFood.toLowerCase() + "_" + randomAnimal.toLowerCase();
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("foldie made", folderName);
  } else {
    console.log("cannot make folder");
  }
});

program.parse(process.argv);
