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
    outputArray.push("Won't you be my neighbor?");
    }
    else if (userInput.includes ("2")) {
    outputArray.push("Boop!")
    }
    else if (userInput.includes ("1")) {
      outputArray.push("Beep!")
      }
    else {
    outputArray.push(userInput);
    }
  
  })
  return outputArray.join(", ");
}

function stringChangerRev(userInputRev) { 
  let workingArray = robogersHood(userInputRev);
  const outputArray = [];
  workingArray.forEach(function(userInputRev) {
    if (userInputRev.includes ("3")) {
    outputArray.push("Won't you be my neighbor?");
    }
    else if (userInputRev.includes ("2")) {
    outputArray.push("Boop!")
    }
    else if (userInputRev.includes ("1")) {
      outputArray.push("Beep!")
      }
    else {
    outputArray.push(userInputRev);
    }
  
  })
  return outputArray.reverse().join(", ");
}


//User Interface Logic

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userInput").val();
    const speakMe = stringChanger(userInput);

    $("#translation").html(speakMe);
  });
    $("form#inputFormRev").submit(function(event) {
      event.preventDefault();
      const userInputRev = $("#userInput2").val();
      const speakMeRev = stringChangerRev(userInputRev);
  
      $("#translationRev").html(speakMeRev);
  });
})
