//15. Reverse an Array Without Built-in Methods

function reverseArray(arr)
{
    var newArray = [];
    for(var i = arr.length -1; i >= 0; i--)
    {
        console.log(arr[i]);
        newArray.push(arr[i]);
    }
    console.log('This is reversed array : '+ newArray);
}

var arr = [1,2,3,4,5];
console.log(reverseArray(arr));
