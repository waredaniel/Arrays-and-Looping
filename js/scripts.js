//Business Logic

function robogersHood(userInput) {
  const initialArray = [];
  for (let i = 0; i <= userInput; i++) {
    initialArray.push(i);
    initialString = initialArray.map(String);
    
    console.log(initialString);
  }

}





// const initialArray = userInput.split("");
// console.log(initialArray);

//User Logic

$(document).ready(function() {
  $("form#Quiz").submit(function(event) {
    
    const inputAge = parseInt($("#age").val());

  });
});