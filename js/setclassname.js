out('Im in setclassname')

const inputElementName = document.getElementById('elementName')
const inputStyleName = document.getElementById('styleName')
const pbSetStyle = document.getElementById('pbSetStyle')

function setStyle() {
  //let elm = inputElementName.value; //we need to change variabe to elmstr as we did add(style), first one
  let elmstr = inputElementName.value;
  //  out(elm); //first one
  out(elmstr);
  //  elm = document.querySelector('.' + elm) // first one
  elmstr = document.querySelector('.' + elmstr)
  let style = inputStyleName.value;
  out(style)
  out(elm.classList)

  elm.classList = '';
  elm.classList.add(style);
  elm.classList.add()


  elm.className = style;
  out(elm.className)
}

pbSetStyle.addEventListener('click', setStyle)//pass the function
