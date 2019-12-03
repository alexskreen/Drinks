$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("Now don't pull a Mikey!");
    $('#drinks').show();
  } else if (age === 12) {
    alert("Get outta here!");
    $('#drinks').show();
  }  else {
  $('#under-21').show();
}
});
