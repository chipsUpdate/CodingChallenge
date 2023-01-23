
function combineAddress(add: Address): String {
    return add.street+add.houseNumber.toString()
}

let persons: Array<Person> = []
function setup(personsParam:Array<Person>): void { // can slow
    persons = personsParam
}

function areRoomMates(person1: String, person2:String): Boolean {// fast
    const fileredPersons = persons.filter((person: Person) => {
            return (person.firstName == person1 || person.firstName == person2)
    })
    return combineAddress(fileredPersons[0].address) == combineAddress(fileredPersons[1].address)
}

function isOccupant(person1: String, address: Address): Boolean {// fast
    const fileredPersons = persons.filter((person: Person) => {
            return person.firstName == person1 
    })
    return combineAddress(fileredPersons[0].address) == combineAddress(address)
}

function getOccupants(address: Address): Array<String> {// fast
    const occupants: Array<String> = []
    persons.forEach((person: Person) => {
        if(combineAddress(person.address) == combineAddress(address)){
            occupants.push(person.firstName)
        }
    })

    return occupants
}