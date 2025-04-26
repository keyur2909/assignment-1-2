
var arr = [2,4,7,8];

console.log(doArraySquare(arr));

function doArraySquare(arr)
{
    let a = arr.map(x=> x*x);
    console.log(a);
}