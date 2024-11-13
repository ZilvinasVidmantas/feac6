type Person = {
  name: string;
  age: number;
}

type Employee = Person & {
  salaryPerMonth: number;
}

type Contractor = Person & {
  contracts: number[];
}

function isPerson(person: any): person is Person {
  const potentialyPerson = person as Person;
  return "name" in potentialyPerson && "age" in potentialyPerson;
}

function isEmployee(person: Person): person is Employee {
  return "salaryPerMonth" in person;
}

function isContractor(person: Person): person is Contractor {
  return "contracts" in person;
}

const people = [
  { name: "Alice", age: 25, salaryPerMonth: 4000 },
  { name: "Bob", age: 30, contracts: [1, 2, 3] },
  { name: "Charlie", age: 35, salaryPerMonth: 5000 },
  { name: "David", age: 40, contracts: [4, 5, 6] },
  { name: "David", age: 40 },
];

const employees = people.filter(isEmployee);
const contractors = people.filter(isContractor);
const peopleWithoutRole = people.filter(isPerson);

// TODO: Fix the type of unknownTypePerson
const unknownTypePerson = people[0];
if(isPerson(unknownTypePerson)) {
  unknownTypePerson
  console.log(unknownTypePerson)
} else {
  console.log(unknownTypePerson)

}







