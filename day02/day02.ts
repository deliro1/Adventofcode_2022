import { readFileSync } from "node:fs";

const input_text = readFileSync("V:/AoC/AoC2022/day02/input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")

const test_text = readFileSync("V:/AoC/AoC2022/day02/test.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")

function part1(raw_input: string[]) {
  let score = 0

  function get_outcome_points(game_line: string){
    let game_points = 0

    if (game_line.slice(-1) == 'X'){
      game_points = game_points + 1
      if (game_line.slice(0,1) == 'A'){
        game_points = game_points + 3
      }
      if (game_line.slice(0,1) == 'B'){
        game_points = game_points + 0
      }
      if (game_line.slice(0,1) == 'C'){
        game_points = game_points + 6
      }
    }
    if (game_line.slice(-1) == 'Y'){
      game_points = game_points + 2
      if (game_line.slice(0,1) == 'A'){
        game_points = game_points + 6
      }
      if (game_line.slice(0,1) == 'B'){
        game_points = game_points + 3
      }
      if (game_line.slice(0,1) == 'C'){
        game_points = game_points + 0
      }
    }
    if (game_line.slice(-1) == 'Z'){
      game_points = game_points + 3
      if (game_line.slice(0,1) == 'A'){
        game_points = game_points + 0
      }
      if (game_line.slice(0,1) == 'B'){
        game_points = game_points + 6
      }
      if (game_line.slice(0,1) == 'C'){
        game_points = game_points + 3
      }
    }

    return game_points
  }
  raw_input.forEach(line => {
    score = score + get_outcome_points(line)
    console.log(score)
  });
  console.log("Solution Part 1:")
  console.log(score)

}

function part2(raw_input: string[]) {
    let score = 0

    function get_outcome_points(game_line: string){
      let game_points = 0
  
      if (game_line.slice(-1) == 'X'){
        game_points = game_points + 0
        if (game_line.slice(0,1) == 'A'){
          game_points = game_points + 3
        }
        if (game_line.slice(0,1) == 'B'){
          game_points = game_points + 1
        }
        if (game_line.slice(0,1) == 'C'){
          game_points = game_points + 2
        }
      }
      if (game_line.slice(-1) == 'Y'){
        game_points = game_points + 3
        if (game_line.slice(0,1) == 'A'){
          game_points = game_points + 1
        }
        if (game_line.slice(0,1) == 'B'){
          game_points = game_points + 2
        }
        if (game_line.slice(0,1) == 'C'){
          game_points = game_points + 3
        }
      }
      if (game_line.slice(-1) == 'Z'){
        game_points = game_points + 6
        if (game_line.slice(0,1) == 'A'){
          game_points = game_points + 2
        }
        if (game_line.slice(0,1) == 'B'){
          game_points = game_points + 3
        }
        if (game_line.slice(0,1) == 'C'){
          game_points = game_points + 1
        }
      }
  
      return game_points
    }
  
    raw_input.forEach(line => {
      score = score + get_outcome_points(line)
      console.log(score)
    });
    console.log("Solution Part 2:")
    console.log(score)
}

console.log("TEST INPUT:")
part1(test_text);
console.log(" ")
part2(test_text);

console.log("REAL INPUT:")
part1(input_text);
part2(input_text);