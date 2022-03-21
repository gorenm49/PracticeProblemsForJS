let result =0;
let sum =0;
for(let i = 1 ; i <=5 ; i++)
{
     result = Math.floor(Math.random() * 90) +10;
     sum+= result;
}

console.log("Sum of 5 random 2digits is :"+sum);
let avg = sum/5;
console.log("Average is :"+avg);
