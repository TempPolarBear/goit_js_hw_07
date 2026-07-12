const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = input.value.trim();
  }
});