function pyramid(character, rows, direction) {

  let output = "\n";

  for (let i = 0; i < rows; i++) {

    let level = direction ? (rows - 1 - i) : i;

    let spaces = " ".repeat(rows - 1 - level);

    let pattern = character.repeat(1 + 2 * level);

    output += spaces + pattern + "\n";
  }

  return output;
}

console.log(pyramid("O", 10, false))