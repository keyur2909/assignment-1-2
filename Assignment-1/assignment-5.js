//5. Check Leap Year

console.log('5. Check Leap Year');

function isLeapYear(year)
{
    if((year % 4 == 0) && (year % 100 == 0 || year % 400 === 0))
    {
        return true;
    }
    else
        return false;
}
console.log('The value is 2024');
console.log(isLeapYear(2024));

console.log('The value is 1900');
console.log(isLeapYear(1900));



