const numbers = [1,2,3];
[num1,,num2] = numbers;
console.log(num1,num2);

const student = {
    name: 'Ajay',
    age: 27,
    place: 'tvm'
}

{name} = student;
console.log(name);