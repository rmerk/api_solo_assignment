var apikey = '83d5248efd58945b'; // API for wunderground

$(document).ready(function($) {
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
});//end documentReady
