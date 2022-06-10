//Business Logic

function robogersHood(userInput) {
  const initialArray = [];
  for (let i = 0; i <= userInput; i++) {
    initialArray.push(i);
  }
    initialString = initialArray.map(String);
    return initialString;
}

function stringChanger(userInput) {
  let workingArray = robogersHood(userInput);
  const outputArray = [];
  workingArray.forEach(function(userInput) {
    if (userInput.includes ("3")) {
    outputArray.push("Won't you be my neighbor?")
    }
    else {
    outputArray.push(userInput);
    }
  
  })
  return outputArray.join();
}




//User Logic

$(document).ready(function() {
    
  

  });
});