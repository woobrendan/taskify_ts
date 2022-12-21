let name:string = 'Brendan'

// use union | to let a variable have multiple types
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

//add question mark after key means that the it does not have to be initialized. optional
type Person = {
  name: string,
  age?: number
}
let george: Person = {
  name: 'George',
  age: 22 
};

//Create an array of type Person
let lotsOfPeople: Person[];

//unknown better than type any
let personName: unknown;

// void returns undefined, never doesnt return anything
let printName: (name: string) => never;

// const printName = (name: string) => {
//   console.log('name:', name)
// }

export{}