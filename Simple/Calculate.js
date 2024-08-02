//Calculate Purchase Amount
let Tshirt = 300;
let Pants = 700;
let discount = 0.8;
let TotalAmount = (Tshirt + Pants) * discount;

//Calculate
TotalAmount -= 500;
console.log(TotalAmount);

let sentence = `Alex spents ${TotalAmount} dollars to purchase a Tshirt with ${Tshirt} dollars (original price) and Pants with ${Pants} dollars (original price) today.`;

//Replace Word
let newSentence = sentence.replace("today","yesterday");
console.log(newSentence);

//Show only few word
let firstSentence = sentence.slice(0,24);
console.log(firstSentence);