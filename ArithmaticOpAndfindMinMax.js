let a =10;
let b =20;
let c =15;

let res1=0;
let res2=0;
let res3=0;
let res4=0;

res1 = a + b * c;
res2 = a % b + c;
res3 = c + a / b;
res4 = a * b + c;

console.log(res1+" "+res2+" "+res3+" "+res4);

let max = Math.max(res1,res2,res3,res4);
let min = Math.min(res1,res2,res3,res4);

console.log("Maximum val :"+max);
console.log("Minumum val :"+min);