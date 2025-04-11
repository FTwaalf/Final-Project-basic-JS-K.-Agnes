'use strict';

const prompt = require('prompt-sync')();
const mockData = require('./mockData'); 

// Create an empty profile object
let profile = {};


// Prompt the user for input
while (true) {
    let firstName = prompt("What is your first name? ");
    if (firstName.trim() !== "") {
        profile.first_name = firstName.trim();
        break;
    } else {
        console.log("First name cannot be empty.");
    }
}

while (true) {
    let lastName = prompt("What is your last name? ");
    if (lastName.trim() !== "") {
        profile.last_name = lastName.trim();
        break;
    } else {
        console.log("Last name cannot be empty.");
    }
}

while (true) {
    let ageInput = prompt("What is your age? ");
    let age = Number(ageInput);
    if (!isNaN(age) && age >= 18) {
        profile.age = age;
        break;
    } else {
        console.log("Please enter a valid age (18+).");
    }
}

while (true) {
    let gender = prompt("What is your gender? (M, F, X): ");
    if (['M', 'F', 'X'].includes(gender.toUpperCase())) {
        profile.gender = gender.toUpperCase();
        break;
    } else {
        console.log("Please enter M, F, or X.");
    }
}

while (true) {
    let genderInterest = prompt("What gender are you interested in? (M, F, X): ");
    if (['M', 'F', 'X'].includes(genderInterest.toUpperCase())) {
        profile.gender_interest = genderInterest.toUpperCase();
        break;
    } else {
        console.log("Please enter M, F, or X.");
    }
}

while (true) {
    let location = prompt("What is your location? (rural or city): ");
    if (['rural', 'city'].includes(location.toLowerCase())) {
        profile.location = location.toLowerCase();
        break;
    } else {
        console.log("Please enter 'rural' or 'city'.");
    }
}

while (true) {
    let minAgeInput = prompt("Minimum age of interest? ");
    let minAge = Number(minAgeInput);
    if (!isNaN(minAge) && minAge >= 18) {
        profile.min_age_interest = minAge;
        break;
    } else {
        console.log("Enter a valid age (18+).");
    }
}

while (true) {
    let maxAgeInput = prompt("Maximum age of interest? ");
    let maxAge = Number(maxAgeInput);
    if (!isNaN(maxAge) && maxAge > profile.min_age_interest) {
        profile.max_age_interest = maxAge;
        break;
    } else {
        console.log("Maximum age must be greater than the minimum age.");
    }
}
// Count the number of matches
let matches = [];

for (let i = 0; i < mockData.length; i++) {
    let person = mockData[i];
    const isAgeRangeMatch = person.age >= profile.min_age_interest && person.age <= profile.max_age_interest;
    const isGenderMatch = person.gender === profile.gender_interest;
    const isGenderInterestMatch = person.gender_interest === profile.gender;
    const isLocationMatch = person.location === profile.location;
    
    
    if (isAgeRangeMatch && isGenderMatch && isGenderInterestMatch && isLocationMatch) {
        matches.push(person);
    }
}

// Display the total number of matches
console.log(`Total Matches: ${matches.length}`);


// show matched profiles in a table
if (matches.length > 0){
    console.table(matches); 
} else {
    console.log("No Matches found");
}
