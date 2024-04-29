// -------------prompt using
const prompt = require('prompt-sync')();

let time = prompt("what time is it? ");
if(time >= 7.00 && time <= 8.00){
  console.log("Breakfast time.");
}else
if(time >= 12.00 && time <= 13.00 ){
  console.log("lunch time.");
}else
if(time >= 18.00 && time <= 19.00){
  console.log("Dinner time.");
}else{
  console.log("There is no mealtime.");
}