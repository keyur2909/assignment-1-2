console.log('6. Simple Calculator using Switch');

const num1 = parseFloat(prompt('Enter first number : '));
const num2 = parseFloat(prompt('Enter second number : '));

const operator = prompt('Please select an operator (+, -, *, /) :');

console.log('First Number : '+ num1);
console.log('Second Number : '+ num2);

console.log('Entered operator : '+ operator);

let result;

switch(operator)
{
    case '+':
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case '-':
        result = num1 - num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case '*':
        result = num1 * num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case '/':
        result = num1 / num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
}
