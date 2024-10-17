let durasiLari = 15; 
let durasiPushUp = 10; 
let durasiPlank = 5; 

const kaloriLariPerMenit = 12;
const kaloriPushUpPerMenit = 6.67; 
const kaloriPlankPerMenit = 5; 

let totalKaloriLari = durasiLari * kaloriLariPerMenit;
let totalKaloriPushUp = durasiPushUp * kaloriPushUpPerMenit;
let totalKaloriPlank = durasiPlank * kaloriPlankPerMenit;

let totalKalori = totalKaloriLari + totalKaloriPushUp + totalKaloriPlank;

console.log("Total kalori yang terbakar setelah olahraga:");
console.log("Lari: " + totalKaloriLari + " kalori");
console.log("Push-up: " + totalKaloriPushUp + " kalori");
console.log("Plank: " + totalKaloriPlank + " kalori");
console.log("Total kalori yang terbakar: " + totalKalori + " kalori");
