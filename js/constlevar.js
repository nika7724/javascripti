function out(any) { console.log(any) }
out('I am in constletvar')

const a = 5 //const you cannot assign to other variable
let b = "hej" //let , normal assign, you can reassign
var c = null //is not allowed, because of scope

function testScope() {
  let x = "x hello"
  var z = "hello"
  if (x>z) {
    out("inside scope2")
    let a = 4
    var b = 5
    if (b>a) {
      let a1 = 10
      var b1 = 11 //even var , it cannot be reached from outside
    }
  }
}
testScope()
out(a)
//out(b1)
//out(z)
