console.log('Pubregels voor jongeren');
// Leeftijd om alcohol te mogen drinken
const myAge = 18;

// Check of persoon 18 jaar of ouder is
if (myAge == 18) {
    console.log("18 jaar, je mag naar binnen");
} else if (myAge > 18) {
    console.log("Ouder dan 18, je mag wel naar binnen");
} else {
    console.log("Geen 18, je mag niet naar binnen");
}

// Check of persoon een vrouw is
const isFemale = true;
console.log(typeof isFemale);

//Geslacht vrouw bepalen
if (isFemale) {
    console.log("Ticket Vrouw");
} else if (isFemale) {
    console.log("Ticket Man");
} else {
    console.log("man, je mag niet naar binnen");
}

//Driverstatus
const driverstatus = "bob";
console.log(driverstatus);

// wel of niet rijden
if (driverstatus === "bob") {
    console.log("je mag rijden, je bent de bob");
} else {
    console.log("je mag niet rijden, je bent geen bob");
}

//50% korting
var age = 17;
if (age >= 18 && age <= 25) {
    console.log("You get 50% off!");
} else {
    console.log("sorry, no discount");
}

//Sarah or Abraham for free beer
const firstName = "Nik";
const firstname = "Sarah";
console.log(firstName);

// yes or no free beer
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("You get beer for free");
} else {
    console.log("Sorry, no free beer");
}

//anniversary discount nachos
const totalAmount = "60";
console.log(totalAmount);

// Free nachos
if (totalAmount >= "49" || totalAmount <= "100") {
    console.log("You get nachos for free");
} else {
    console.log("Sorry, no free nachos");
}

//anniversary discount champagne
const totalAmount1 = "10";
console.log(totalAmount1);

//Free champagne
if (totalAmount1 >= "100") {
    console.log("You get a bottle of champagne for free");
} else {
    console.log("Sorry, no bottle of champagne for you");
}