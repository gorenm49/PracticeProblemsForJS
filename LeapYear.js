const inputYear = 2023;

if(inputYear % 400==0)
{
    console.log("leap year");
}
else if(inputYear % 100 == 0)
{
    console.log("Not leap year");
}
else if(inputYear % 4 ==0)
{
    console.log("leap year");
}
else
{
    console.log("Not leap year");
}

