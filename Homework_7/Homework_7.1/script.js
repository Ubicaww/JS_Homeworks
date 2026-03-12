function removeSymbols(str, symbols) {
  let result = "";

  for (let i = 0; i < str.length - 1; i++) {
    result += symbols.includes(str[i]) ? "" : str[i];
  }

  return result;
}

const text = prompt("Please enter a phrase");

if (text === null || text.trim() === "") {
  console.log("Input was canceled");
} else {
  const input = prompt("Please enter leters");

  if (input === null || input.trim() === "") {
    console.log("Input was canceled");
  } else {
    const symbols = input.includes(" ") ? input.split(" ") : input.split("");
    console.log(removeSymbols(text, symbols));
  }
}