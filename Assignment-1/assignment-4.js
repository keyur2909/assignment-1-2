
console.log('4. Find the Largest of Three Numbers');

var num1 = 50;
var num2 = 40;
var num3 = 30;
let largenum;

console.log('Number 1 : ' + num1);
console.log('Number 1 : ' + num2);
console.log('Number 1 : ' + num3);

if(num1 >= num2 && num1 >= num3)
{
    largenum = num1;
}
else if(num2 >= num1 && num2 >= num3)
{
    largenum = num2;
}
else
{
    largenum = num3;
}

console.log('Largest No among three numbers : ' + largenum);
