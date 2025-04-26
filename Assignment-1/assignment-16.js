
//🔹 16. Check Palindrome String

function isPalindrome(str)
{
    let revString = '';
    for (let i = str.length - 1; i >= 0; i --)
    {   
        revString = revString + str[i];
        //console.log(revString);
    }
    if(revString == str)
    {
        console.log('This is palindrome : '+revString);
    }
    else
    {
        console.log('This is not palindrome : '+revString);
    }
}

let str = 'nitin';
let str1 = 'keyur'
let str3 = 'ala';
console.log(isPalindrome(str));
console.log(isPalindrome(str1));
console.log(isPalindrome(str3));