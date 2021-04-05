class Entity {
    #name;  //encapsulation -> doesn't allows to refer this property from any place except inside this class
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    printName() {
        console.log(`Name of this entity is ${this.name}`);
    }
}

class Stuff extends Entity {
    constructor(name) {
        super(name);
    }

    static isStuff(stuff) {
        return Stuff.prototype.isPrototypeOf(stuff);
    }

}

class Box extends Entity {
    constructor(name) {
        super(name);
        this.stuffs = [];
    }
    static isBox(box) {
        return Box.prototype.isPrototypeOf(box);
    }

    printName() { // polymorphism -> overriding a method
        console.log(`Your box is a ${this.name}`);
    }

    addStuff(stuff) {
        if (Stuff.isStuff(stuff)) {
            this.stuffs.push(stuff);
        } else {
            console.log(new Error('It is not a stuff!'));
        }
    }

    removeStuff(index) {
        this.stuffs.splice(index, 1);
    }
}

class User extends Entity {
    constructor(name, boxes) {
        super(name);
        this.boxes = [];
    }

    printName() { // polymorphism -> overriding a method with a call to the parent method
        super.printName();
        console.log('Oh, sorry! It is the name of human!')
    }

    addBox(box) {
        if (Box.isBox(box)) {
            this.boxes.push(box);
        } else {
            console.log(new Error('It is not a box!'));
        }
    }

    removeBox(index) {
        this.boxes.splice(index, 1);
    }

    getAllBoxesNames() {
        return this.boxes.map(box => box.name).toString();
    }

    getAllStuffsNames() {
        return this.boxes.map(box => box.stuffs.map(stuff => stuff.name).toString());
    }

    displayInfo() {
        console.log(`${this.name} has ${this.getAllBoxesNames()} which consider(s) ${this.getAllStuffsNames()} :)`)
    }
}

let basket = new Box('Basket with flowers');
basket.addStuff(new Stuff('Rose'));
basket.addStuff(new Stuff('Gerbera'));
basket.addStuff(new Stuff('Chamomile'));
let person = new User('Mary');
person.addBox(basket);

basket.removeStuff(2);

let lily = new Stuff('Lily');
basket.addStuff(lily);

person.displayInfo();

let box = new Box('Box with books');
box.addStuff(new Stuff('novel Three Comrades'));
box.addStuff(new Stuff(' story Animal Farm'));
box.addStuff(new Stuff('dystopia 1984'));

box.addStuff(123); // example with incorrect input data
person.addBox(box);

person.displayInfo();