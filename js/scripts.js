function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
  this.quote = 0
}


Ticket.prototype.priceCalculator = function() {
  if (age === 'senior') {
    this.quote += 1
  } else if (age === 'adult') {
    this.quote += 3
  } else {
    this.quote += 2
  }
  
  if (time === 'day') {
    this.quote += 2
  } else {
    this.quote += 3
  }
  
  if (movie === 'movie1') {
    this.quote += 2
  } else {
    this.quote += 3
  }
  return quote
};

$(document).ready(function() {
  $("form#ticketprice").submit(function(event) {
    event.preventDefault();
    const inputtedAge = $("select#age").val();
    const inputtedTime = $("select#time").val();
    const inputtedMovie = $("select#movie").val();
    let newTicket = new Ticket(inputtedAge, inputtedMovie, inputtedTime);
    totalPrice = newTicket.priceCalculator();
    $("#price").text(totalPrice);
    $("#quote").show();
  });
});