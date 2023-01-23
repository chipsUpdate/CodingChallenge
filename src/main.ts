interface Address {
    street: String
    houseNumber: Number
}

interface Person {
    firstName: String
    lastName: String
    address: Address
}

const people: Array<Person> = [
    {
        firstName:"ronny",
        lastName: "youKnow",
        address: {
            street:"tchibo", 
            houseNumber:1,
        },
    },
    {
        firstName:"ronny",
        lastName: "youKnow2",
        address: {
            street:"tchibo", 
            houseNumber:1,
        }
}]
// functions to implement

/**
 * Class City
 * 
 * function constructor(person: Array<Person>): void
 * 
 * function areRoomMates(person1: String, person2:String): Boolean // live at same address
 * 
 * function isOccupant(person1: String, address: Address): Boolean
 * 
 * function getOccupants(address: Address): Array<String>
 * 
 */

/**
 * Approach
 * 
 * 
 */

