const out = (any) => {console.log(any)}
out("im in fruit dropdown")

const ddFruits = document.getElementById("ddFruits")

const fruitArr = ["apple", "orange", "strawberry", "nødder"]

function fillDropDown(item, index) {
  const el = document.createElement("option");
  el.textContent = index + " " + item;
  el.value = index; //important value follows the key.
  ddFruits.appendChild(el);
}

function pbPressed() {
  fruitArr.forEach(fillDropDown)
}

function ddFruitChange() {
  out(ddFruits.value);
  const selindex = ddFruits.selectedIndex;
  const selectedFruit = ddFruits.options[selindex];
  out(selectedFruit);
  out(selectedFruit.textContent)
}

const pbFill = document.getElementById("pbFillDropDown")

pbFill.addEventListener("click", pbPressed)
ddFruits.addEventListener('change', ddFruitChange)
