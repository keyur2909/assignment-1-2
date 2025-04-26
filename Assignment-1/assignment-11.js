//Factorial using a funciton

// function DoFactorial(num)
// {
//     let answer = 1;
//     if (num<0)
//     {
//         console.log('Factorial not defined for this number');
//     }

//     for(let i = 2; i <= num; i ++)
//     {
//         answer *= i;
//     }
//     console.log(answer);
// }

// DoFactorial(5);

// const square = num => num * num;

// console.log(square(10));


//Find Max and Min in an Array



function findMinMax(Maindata)
{
    console.log('This is main array :'+MainData);
    if(MainData.length == 0)
    {
        console.log('Array is empty');
    }
    var min = MainData[0];
    var max = MainData[0];

    for(let i = 1; i < MainData.length; i++)
    {
        if(MainData[i] < min) 
            min = MainData[i];
        if(MainData[i] > max) 
            max = MainData[i];
    }
    console.log('Min Number :' + min);
    console.log('Max Number :' + max);
}
var MainData = [2,3,4,5];
findMinMax(MainData);