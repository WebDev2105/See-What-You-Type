const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  var inputValue = input.value;
  output.textContent = inputValue;
});
