var student = {
    name: 'Ajay',
    age: 27
};
var getName = function (student) {
    return student.name;
};
var getName1 = function (student) {
    return student.name;
};
var getName2 = function (student) {
    return student.name;
};
var getName3 = function (student) { return student.name; };
console.log(getName3(student));
