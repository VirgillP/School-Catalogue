//Parent Class
class School{
  constructor(name, level, numberOfStudents){
    this._name= name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  //Getters for name level numberOfStudents
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  //Setter numberOfStudents
 set numberOfStudents(newNumberOfStudents) {
if (typeof numberOfStudents === 'number') { 
this._numberOfStudents = newNumberOfStudents;
  console.log(`New input ${newNumberOfStudents} has been stored.`);
} else { console.log('Invalid input: numberOfStudents must be set to a Number.'); 
  } 
 } 
  //Method quickFacts
   quickFacts(){
     console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level. Kindly take note of our pickup policy: ${this._pickupPolicy} `);
   }
  //Static method pickSubstituteTeacher
static pickSubstituteTeacher(){
   const substituteTeachers = ['J. R. Smith', 'Lou Williams', 'Jamal Crawford', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const randomNumber =
Math.floor(substituteTeachers.length * Math.random());
return substituteTeachers[randomNumber];
}
}

//Class PrimarySchool
class PrimarySchool extends School{
constructor(name, numberOfStudents, pickupPolicy){
  super(name, 'primary', numberOfStudents);
  this._pickupPolicy = pickupPolicy;
}
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

//Class HighSchool
class HighSchool extends School{
constructor(name, numberOfStudents, sportsTeams){
  super(name, 'high', numberOfStudents);
  this._sportsTeams = sportsTeams;
}
  get sportsTeams(){
    console.log(`${this._sportsTeams}`);
  }
}

//Instance PrimarySchool
const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher();
console.log(School.pickSubstituteTeacher());

//Instance HighSchool
const alSmith  = new HighSchool ('Al E. Smith', 415, ['Baseball','Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
