var apikey = '83d5248efd58945b'; // API for wunderground

$(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/83d5248efd58945b/geolookup/conditions/q/MN/Andover.json",
  crossDomain: true,
  dataType : "jsonp",
  success : function(parsed_json) {

  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var $appendAPI = "Current temperature in " + location + " is: " + temp_f;

  console.log($appendAPI);

  $.ajax('data.json', {
      success: function(response){
          console.log(response);
          $(function () {
            // Grab the template script
            var theTemplateScript = $("#entry-template").html();

            // Compile the template
            var theTemplate = Handlebars.compile(theTemplateScript);

            // Pass our data to the template
            var theCompiledHtml = theTemplate(response);

            // Add the compiled html to the page
            $('body').html(theCompiledHtml);
          });//end function()
      },//end success
      error: function(request, errorType, errorMessage){
          alert(errorType + " " + errorMessage);
      }
  });//end ajax

}//end parsed_json
});//end ajax
});//end documentReady
