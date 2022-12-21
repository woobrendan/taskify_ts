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


interface People {
  name: string,
  age?: number
}

//extends inherits properties from interface People
interface Guy extends People {
  profession: string;
}


type A = {
  a: string;
  b: number;
}

//type B inherits the properties of type A
// & can be used for types and interfaces to extend each other
type B = A & {
  c: string;
  d: number;
}

export{}