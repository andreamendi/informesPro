
$(document).ready(function() {
  $(".dropdown-button").dropdown();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('select').material_select();


  $("#cdmx").on("click", function() {
    $("#cotizacionInHome").show("slow");
  });

  $("#quiereInHome").on("click", function() {
    $("#gxga").show("slow");
  });
  $("#quiereeLearning").on("click", function() {
    $("#gxga").show("slow");
  });
  $("#quierebLearning").on("click", function() {
    $("#gxga").show("slow");
  });

  $("#quiereGG").on("click", function() {
    $("#formulario").show("slow");
  });
  $("#quiereA").on("click", function() {
    $("#formulario").show("slow");
  });

  $("#cotizar").on("click", function() {
    $("#propuesta").show("slow");
  });
});
