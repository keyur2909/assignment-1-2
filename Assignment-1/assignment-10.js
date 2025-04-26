//10. Check Prime Number using Function

CheckPrimeNumber(12);

function CheckPrimeNumber(num)
{
    if(num <= 1)
        return false;
    else if (num === 2)
        return true;
    if(num % 2 === 0)
        return false;
    for(let i = 3; i <= Math.sqrt(num); i += 2)
    {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(CheckPrimeNumber(10));
console.log(CheckPrimeNumber(11));
console.log(CheckPrimeNumber(13)); 