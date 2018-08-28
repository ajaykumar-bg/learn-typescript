type Employee = { name: string; age: number };

const employee: Employee = { name: 'Midhun', age: 28 };

const serialized = JSON.stringify(employee);

function getNameFromJSON(obj: string) {
  // return (<Employee>JSON.parse(obj)).name;
  return (JSON.parse(obj) as Employee).name;
}

console.log(getNameFromJSON(serialized));
