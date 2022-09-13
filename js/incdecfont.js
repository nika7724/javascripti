out("im in increase decrease font") //somehow I can use 'out' function which has already been used in another file. and it must be excuted with html

const pbIncrease = document.querySelector(".pbIncrease")
const pbDecrease = document.querySelector(".pbDecrease")

const lineFirst = document.querySelector(".first")

out(lineFirst)
out("fontsize =" + lineFirst.style.fontSize)
lineFirst.style.fontSize = '30px' //set font size
out("fontsize =" + lineFirst.style.fontSize)

let fontsize = 10;

function increaseFontSize(btn) {
  out(btn)
  fontsize++
  out("fontsize = " + lineFirst.style.fontSize)
  lineFirst.style.fontSize = fontsize + 'px'
}


/*function decreaseFontSize(btnn) {
  out(btnn)
  fontsize--
  out("fontsize = " + lineFirst.style.fontSize)
  lineFirst.style.fontSize = fontsize + 'px'
}*/


function testKeyPressed(event) {
  out(event)
  out(event.key)
  let k = event.key
  if (k == 'd') {
    out("dummy")
  }
}

/*function testKeyPressed(event) {
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
}*/


pbIncrease.addEventListener('click', increaseFontSize)
//pbIncrease.addEventListener('click'), () => increaseFontSize()) //another way to pass event, without argument
//pbIncrease.addEventListener('click'), (btn) => increaseFontSize(btn))//another way to pass event

//pbIncrease.addEventListener('click', decreaseFontSize)



document.addEventListener('keydown', e => testKeyPressed(e)) //we don't have a button, we have keyboard


