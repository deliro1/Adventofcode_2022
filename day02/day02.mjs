import { readFileSync } from "node:fs";

const input_text = readFileSync("V:/AoC/AoC2022/typescript/AOC2022/src/day01/input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")

const test_text = readFileSync("V:/AoC/AoC2022/typescript/AOC2022/src/day02/test.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")

function part1(raw_input) {
  let score = 0

  function get_outcome_points(game_line){
    let game_points = 0
    if (game_line.slice(-1) == 'X'){
      game_points = game_points + 1
      if (game_line.slice(0) == 'A'){
        game_points = game_points + 3
      }
      if (game_line.slice(0) == 'B'){
        game_points = game_points + 0
      }
      if (game_line.slice(0) == 'C'){
        game_points = game_points + 6
      }
      console.log("X")
      console.log(game_points)

    }
    if (game_line.slice(-1) == 'Y'){
      game_points = game_points + 2
      if (game_line.slice(0) == 'A'){
        game_points = game_points + 6
      }
      if (game_line.slice(0) == 'B'){
        game_points = game_points + 3
      }
      if (game_line.slice(0) == 'C'){
        game_points = game_points + 0
      }
      console.log("Y")
      console.log(game_points)

    }
    if (game_line.slice(-1) == 'Z'){
      game_points = game_points + 3
      if (game_line.slice(0) == 'A'){
        game_points = game_points + 0
      }
      if (game_line.slice(0) == 'B'){
        game_points = game_points + 6
      }
      if (game_line.slice(0) == 'C'){
        game_points = game_points + 3
      }
      console.log("Z")
      console.log(game_points)
    }

    return game_points
  }

  raw_input.forEach(line => {
    score = score + get_outcome_points(line)
    console.log(score)
  });

  console.log(score)

}

function part2(raw_input) {

}

console.log("TEST INPUT:")
part1(test_text);
part2(test_text);

console.log("REAL INPUT:")
//part1(input_text);
//part2(input_text);