const findTheOldest = function(people) {
    let oldestPerson = people[0];

    for (person of people) {
        if (getYearsLived(person) > getYearsLived(oldestPerson)) {
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

function getYearsLived (person) {
    const currentYear = Number(new Date().getFullYear());

    lastLivedYear = "yearOfDeath" in person ? person.yearOfDeath : currentYear;

    return lastLivedYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
