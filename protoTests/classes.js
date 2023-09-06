'use strict'
class User {
    constructor(name, surname,age) {
        this.name = name;
        this.surname = surname;
        this._age = age;
    }
    static outputMethod () {
        if (this.name.length > 5 || this.surname.length > 10){
            console.log("Length is large");
        }
        else {
            console.log("It's not large");
        }
    }
    getAge () {
        return this._age;
    }
}

let developer = new User("John", "Smith",20);
developer.age = 12;
console.log(developer.getAge());
User.outputMethod();