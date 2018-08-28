var employee = { name: 'Midhun', age: 28 };
var serialized = JSON.stringify(employee);
function getNameFromJSON(obj) {
    // return (<Employee>JSON.parse(obj)).name;
    return JSON.parse(obj).name;
}
console.log(getNameFromJSON(serialized));
