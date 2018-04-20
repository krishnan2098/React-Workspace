class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! This is ${this.name}. ${this.name} is ${this.age} years old.`
    }
    getDescription() {
        return ` ${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(!!this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Andrew Mead', 26, 'Computer Science', 'Philadelphia');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const hiker = new Traveller('Baba Ramdev', 53, 'Ludhiana');
console.log(hiker.getGreeting());
