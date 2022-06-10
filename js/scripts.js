//Business Logic

function robogersHood(userInput) {
  const initialArray = [];
  for (let i = 0; i <= userInput; i++) {
    initialArray.push(i);
  }
    initialString = initialArray.map(String);
    return initialString;
}











//User Logic

$(document).ready(function() {
  $("form#Quiz").submit(function(event) {
    
    const inputAge = parseInt($("#age").val());

  });
});