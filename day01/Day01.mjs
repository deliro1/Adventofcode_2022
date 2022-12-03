import { readFileSync } from "node:fs";

const elf_cals = readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n\n")



function part1() {
  //do something here
  let summed_cals= []
  elf_cals.forEach(foods => {
    let str_list = foods.split("\n")
    let int_list = str_list.map(Number)
    let sum_cals = int_list.reduce((summed, next) => summed + next, 0)
    summed_cals.push(sum_cals)
    console.log("")
  });
  console.log(summed_cals)
  console.log(Math.max(...summed_cals))
}

function part2() {
  //do something here
}

part1();
part2();