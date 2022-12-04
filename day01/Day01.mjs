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
  });
  console.log(summed_cals)
  console.log(Math.max(...summed_cals))
}

function part2() {
  let summed_cals= []
  elf_cals.forEach(foods => {
    let str_list = foods.split("\n")
    let int_list = str_list.map(Number)
    let sum_cals = int_list.reduce((summed, next) => summed + next, 0)
    summed_cals.push(sum_cals)
  });
  let sorted_cals = [...new Float64Array(summed_cals).sort()]
  console.log(sorted_cals)
  console.log(Math.max(...sorted_cals))
  let high_cal_array = sorted_cals.slice(-3)
  let high_cal = high_cal_array.reduce((summed, next) => summed + next, 0)
  console.log(high_cal)

}

part1();
part2();