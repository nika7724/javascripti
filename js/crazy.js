console.log("I am in crazy")

const a =5
function out(any) { console.log(any)}
function sum(x,y) { return x+y}
function sub(x,y) {return x-y}

console.log(a)
//a=6 you can't declare a again as you use const
let b =6
console.log(b)
b ='hello'
console.log(b)

out (sum(5,6))
out (sum(5, "hello"))
out (sum(4>3, "hello"))
out(sum(5.5, "hello"))

//out(sub(5, 4>3))

const c = 0/0;
let d = c+5;
out(sum(c, 'hellox'))

let e = null; //not point anything means undefined
out(e);

let f
out(f)
out(f,c)
