let distance = 2501
function scuberGreetingForFeet(distance){
  if (distance <= 400) {
   return ("This one is on me!");
  }
  else if(distance > 400 && distance <= 2000) {
    return("That will be twenty bucks.");
  }
  else if(distance > 2000 && distance <= 2500) {
    return("I will gladly take your thirty bucks.");
  }
  else
  return("No can do.");
}

let town = "Pittsburgh";
function ternaryCheckCity(town){
  let result = town === "NYC" ? "Ok, sounds good." : "No go."
  console.log(result);
  return result

}

let tip = "thanks for everything";
function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous" : return("Thank you so much.");  
    break;

    case "not as generous" : return("Thank you.");
    break;

    default : return("Bye.");
  }
}
