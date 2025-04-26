//14. Remove Duplicates from Array

function removeDublicate(MainData)
{
    console.log('This is main array : '+MainData);
    var FinalArray = [];
    for(i=0; i<=MainData.length; i++)
    {
        console.log(MainData[i]);
        let temp = MainData[i];
        if(FinalArray.includes(MainData[i]))
        {
            continue;
        }
        else
        {
            FinalArray.push(MainData[i]);
        }
    }
    console.log('This is final array after dublicate value : '+FinalArray);
}

var MainData = [4,5,8,8,6,6,9,1,1,1];
console.log(removeDublicate(MainData));

