$(document).ready(function() {

    /**
     * This function checks if the information makes sense
     * **/

    function validateForm() {
        var inputText = $("#inputText");
        var submit = $("#submit");

        inputText.on("input", function(){

            if($.isNumeric($(this).prop("value")) || $(this).prop("value").length <= 5){
                $("#warning").removeClass("hidden-text").addClass("hidden-text-show");
            }
            else {
                $("#warning").removeClass("hidden-text-show").addClass("hidden-text");
                submit.removeAttr("disabled");
                submit.css('cursor','pointer');
            }

        });


    }



    validateForm();



});