// class Contry{
//   constructor(name, continent, Language){
//     this.name = name;
//     this.continent = continent;
//     this.Language = Language;
//   }
//  print(){
//     return `Contry Name is ${this.name} it belongs to ${this.continent} Continent and First Language of this Contry is ${this.Language} `
//  }
// }

// let india = new Contry('India', 'Asia', 'Hindi');
// let usa = new Contry("USA", "North America", "English");

// console.log(india.print());
// console.log(usa.print());




// Constructor context

function Persons(name,age,gender){
  this.name = name ;
  this.age = age;
  this.gender = gender;
}

const Riyank = new Persons('Riyank', 20, 'Male');
const Sem = new Persons('Sem', 15, 'male');
const Baa = new Persons('Rukshomani', 75, 'Female');

console.log(Baa.gender);