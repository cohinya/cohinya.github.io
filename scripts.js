

$(document).ready(function() {
$("button").click(function() {
    $("img").hide(); 
});

$("button").dblclick(function(){
    $("img").show();
});

});



var name = "Christine";
var age = 27;
console.log(name + " " + age);
alert( name + " " + age);
prompt( "What is your name?");
function firstFunction() {
    var newAge = 37
    console.log (name + " " + age + newAgeOfMine)
};
firstFunction()




function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}