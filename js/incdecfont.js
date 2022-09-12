/*out("im in increase decrease font") // shomehow i can use 'out' function which has already been used in another file. and it must be excuted with html

const pbIncrease = document.querySelector(".pbIncrease")
const pbDecrease = document.querySelector(".pbDecrease")

const lineFirst = document.querySelector(".first")

out(lineFirst)
out("fontsize =" + lineFirst.style.fontSize)
lineFirst.style.fontSize = '30px'
out("fontsize =" + lineFirst.style.fontSize)

let fontsize = 10;

function increaseFontSize(btn) {
  out(btn)
  fontsize++
  out("fontsize = " + lineFirst.style.fontSize)
  lineFirst.style.fontSize = fontsize + 'px'
}

//pbIncrease.addEventListener('click'), () => increaseFontSize())
//pbIncrease.addEventListener('click'), (btn) => increaseFontSize(btn))

function testKeyPressed(event) {
  //out(event)
  //out(event.key)
  let k = event.key
  if (k == 'd') {
    out("dummy")
  }
}

pbIncrease.addEventListener('click', increaseFontSize)

document.addEventListener('keydown', e => testKeyPressed(e))*/


out("im in increase decrease font")

const pbIncrease = document.querySelector(".pbIncrease")
const pbDecrease = document.querySelector(".pbDecrease")

const lineFirst = document.querySelector(".first")

out(lineFirst)
out("fontsize =" + lineFirst.style.fontSize)
lineFirst.style.fontSize = '30px'
out("fontsize =" + lineFirst.style.fontSize)

let fontsize = 10;

function increaseFontSize(btn) {
  out(btn)
  fontsize++
  out("fontsize = " + lineFirst.style.fontSize)
  lineFirst.style.fontSize = fontsize + 'px'
}

//pbIncrease.addEventListener('click'), () => increaseFontSize())
//pbIncrease.addEventListener('click'), (btn) => increaseFontSize(btn))

function testKeyPressed(event) {
  //out(event)
  //out(event.key)
  let k = event.key
  out(k);
  switch (k.key) {
    case 'Escape':
      lineFirst.style.fontSize = 10 + 'px'
      //escapePressed(k);

      break;
    case 'F10':
      increaseFontSize(k);
      break;
    default:
      out("ikke noget vigtigt k=" + k.key);
  }
}

pbIncrease.addEventListener('click', increaseFontSize)

document.addEventListener('keydown', e => testKeyPressed(e))
