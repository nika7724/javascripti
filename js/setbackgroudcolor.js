function out(any) {console.log(any)}
  out('I am in setbackground color')

const inpColor = document.querySelector(".getColor")
  const pbSetcolor = document.querySelector(".pbSet.color")
out(inpColor)
const bdy = document.querySelector('body')
out(bdy)

function changeBodyColor() {
  let col = inpColor.value;
  out(col)
  body.style.backgroundColor = col
}

pbSetcolor.addEventListener('click', changeBodyColor)



