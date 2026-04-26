let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    let result = Function("return " + expression)();

    display.value = result;

    let div = document.createElement("div");
    div.className = "history-item";
    div.textContent = expression + " = " + result;

    historyList.prepend(div);

  } catch {
    display.value = "Error";
  }
}
