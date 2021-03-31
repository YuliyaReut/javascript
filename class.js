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
    constructor(name, stuffs) {
        super(name);
        if (Stuff.isStuff(stuffs)) {
            this.stuffs = [stuffs];
        } else
            if (!stuffs.find(stuff => !Stuff.isStuff(stuff))) {
                this.stuffs = stuffs;
            }
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

    removeStuff(stuff) {
        this.stuffs.splice(this.stuffs.indexOf(stuff), 1);
    }
}

class User extends Entity {
    constructor(name, boxes) {
        super(name);
        if (Box.isBox(boxes)) {
            this.boxes = [boxes];
        } else
            if (!boxes.find(box => !Box.isBox(box))) {
                this.boxes = boxes;
            }
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

    removeBox(box) {
        this.boxes.splice(this.boxes.indexOf(box), 1);
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

let flowers = [fl1 = new Stuff('Rose'), fl2 = new Stuff('Gerbera'), fl3 = new Stuff('Chamomile')];
let basket = new Box('Basket with flowers', flowers);
let person = new User('Mary', basket);

basket.removeStuff(fl2);
let lily = new Stuff('Lily');
basket.addStuff(lily);

person.displayInfo();

let books = [book1 = new Stuff('novel Three Comrades'), book2 = new Stuff(' story Animal Farm'), book3 = new Stuff('dystopia 1984')];
let box = new Box('Box with books', books);

box.addStuff(123); // example with incorrect input data
person.addBox(box);

person.displayInfo();