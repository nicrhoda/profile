// make manager class

const { off } = require("process");

class Manager {
    constructor (name, email, id, officeNumber) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}