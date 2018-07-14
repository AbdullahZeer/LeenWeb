var About = function() {
  hideAll();
  removeActiveAll();
  $("#About").addClass("active");
}

var Designs = function() {
  hideAll();
  removeActiveAll();
  $("#Designs").addClass("active");
  getDesigns();
  $("#Design-Content").removeClass("Hide");
  $("#Design-Content").addClass('animated fadeInRight');

}

var home = function() {
  hideAll();
  removeActiveAll();
  $("#home").addClass("active");
  $("#Home-Content").removeClass("Hide");
  $("#Home-Content").addClass('animated fadeInRight');

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

var removeActiveAll = function() {
  $("#Designs").removeClass("active");
  $("#About").removeClass("active");
  $("#Services").removeClass("active")
  $("#Contact").removeClass("active");
  $("#home").removeClass("active");
}

var designsViewed = false;
var getDesigns = function() {
  if (!(designsViewed)) {
    work.project.forEach(function(design) {
      var designBlock = "<div class= 'col-lg-4 col-md-6 col-xs-12'>" +
        "<p class='text-center'>" + design.name + "</p>" +
        "<div class='design-card'>" +
        "<img class='card-img-top' src='http://via.placeholder.com/280x280' alt='Card image cap'>" +
        "</div>" +
        "</div>";

      $("#Design-Blocks").append(designBlock);

    })
    designsViewed = true;
  }
};
