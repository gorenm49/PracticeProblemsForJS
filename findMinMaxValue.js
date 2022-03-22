let arrayData=[];

for(let i = 1 ; i <=5 ; i++)
{
     let result = Math.floor(Math.random() * 900) +100;
     arrayData[i]= result;
     console.log(arrayData[i]);
}

let maxVal = Math.max(arrayData);
let minVal = Math.min(arrayData);

console.log(maxVal);
console.log(minVal);
