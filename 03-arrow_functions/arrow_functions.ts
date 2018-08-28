const student = {
    name: 'Ajay',
    age: 27
}

const getName = function(student){
    return student.name;
}


//Using Typescript Arrow function
const getName1 = (student) => {
    return student.name;
}

//Typescript Arrow function Alternatives

const getName2 = student => {
    return student.name;
}

const getName3 = student => student.name;

console.log(getName3(student));

