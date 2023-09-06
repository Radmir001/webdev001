 $(document).ready(function(){
            $("#calculate").click(function(){
                var age = parseFloat($("#age").val());
                if (!isNaN(age)) {
                    var insuranceCost = 5 * age + 300;
                    $("#result").text("Your insurance cost is $" + insuranceCost.toFixed(2) + "/year").fadeIn();
                } else {
                    alert("Please enter a valid age.");
                }
            });

            $("#clear").click(function(){
                $("#age").val("");
                $("#result").fadeOut();
            });
        });