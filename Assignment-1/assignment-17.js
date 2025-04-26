let str = 'my name is keyur patel';

console.log(countVowels(str));

function countVowels(str)
{
    let temp = 0;
    for(i = 0; i <= str.length; i ++)
    {
        //console.log(str.charAt(i));
        let v = str.charAt(i);
        if(v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u')
        {
            temp = temp + 1;
        }
    }
    console.log('Main String'+str);
    console.log('Total number of vowels in string : ' + temp);
}