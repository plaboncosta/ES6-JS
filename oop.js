class Human{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static getGeneralInfo() {
        console.log(`Humnan\'s daily needs is water. So Plabon you need to make a good habit to drink at least 4 litter water a day.`);
        
    }

    getBasicInfo() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
    }
}

let Plabon = new Human('Plabon', 'Joseph', 21);
// Plabon.getBasicInfo();
// Human.getGeneralInfo();


class Men extends Human{
    constructor(firstName, lastName, age, profession) {
        super(firstName, lastName, age);
        this.profession = profession;
    }

    getProfession() {
        console.log(`${this.firstName} ${this.lastName} works in Penta Global Limited as ${this.profession}`);
    }
}


let Costa = new Men('Plabon', 'Costa', 21, 'Software Developer');
// Costa.getProfession();
// Costa.getBasicInfo();
// Men.getGeneralInfo();