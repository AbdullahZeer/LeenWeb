

var About = function() {
  hideAll();
  removeActiveAll();
  $("#About").addClass("active");
}

var Designs = function() {
  hideAll();
  removeActiveAll();
  $("#Designs").addClass("active");
  $("#Design-Content").removeClass("Hide");
  $("#Design-Content").addClass('animated fadeInRight');
}

var home = function() {
  hideAll();
  removeActiveAll();
  $("#home").addClass("active");
  $("#Home-Content").removeClass("Hide");

}

var Services = function() {
  hideAll();
  removeActiveAll();
  $("#Services").addClass("active")

}
var Contact = function() {
  hideAll();
  removeActiveAll();
  $("#Contact").addClass("active");
  $("#Contact-Content").removeClass("Hide");
  $("#Contact-Content").addClass('animated fadeInRight');
}


var hideAll = function() {
  $("#Home-Content").addClass("Hide");
  $("#Contact-Content").addClass("Hide");
  $("#Design-Content").addClass("Hide");

}

var removeActiveAll = function(){
  $("#Designs").removeClass("active");
  $("#About").removeClass("active");
  $("#Services").removeClass("active")
  $("#Contact").removeClass("active");
  $("#home").removeClass("active");
}
