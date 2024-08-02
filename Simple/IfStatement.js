//IF Statement
let attendance = 0.7;
if (score >= 80){
    console.log("Congradulation, you are Genius!");
} else if (score >= pass){
    console.log("Well done, you passed")
} else {
    console.log("Fail, please keep moving!")
}

if (score >= pass && attendance >= 0.8){
    console.log("Congradulation, you finished course!");
} else if (score >= pass || attendance >= 0.8){
    console.log("You passed exam, but need to submit coursework")
} else {
    console.log("Fail, please retake course")
}