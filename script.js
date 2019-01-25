"use strict";
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        console.log(info);
        this.contacts.push(info);
        console.log
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
}   
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const Adam = new Contact (`Adam`, `adam.schachterle@gmail.com`, `222-222-2222`, `Me`)
const Einstein = new Contact (`Einstein`, `ein@thestein.me`, `313-867-5309`, `Hero`)
const Euler = new Contact (`Euler`, `leonhard@euler.net`, `271-828-1828`, `Hero`)

const book = new AddressBook();

book.add(new Contact (`Euler`, `leonhard@euler.net`, `271-828-1828`, `Hero`));
book.add(new Contact (`Einstein`, `ein@thestein.me`, `313-867-5309`, `Hero`))
book.add(new Contact (`Adam`, `adam.schachterle@gmail.com`, `222-222-2222`, `Me`))
console.log(book);

book.print();

while (true) {
    const choice = prompt("would you like to add print delete or quit?");
    if (choice === `add`) {
        const name = prompt(`enter name`);
        const email = prompt(`enter email`);
        const phone = prompt(`enter phone`);
        const relation = prompt(`enter relation`);
        book.add(new Contact(name, email, phone, relation))
    } else if (choice ==='print') {
        book.print();
    } else if (choice ==='delete') {
        const index = prompt(`which index would you like to delete?`);
        book.deleteAt(index);
    } else if (choice ==='quit') {
        console.log(`Bye!`);
        break;
    }
}