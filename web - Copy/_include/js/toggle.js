window.onload = function() {
     
        document.getElementById("reg_content").style.display = 'none';
         document.getElementById("success_msg").style.display = 'none';
     
    };
function myFunction_div() {
    var x = document.getElementById("gen_rule");
   var y=document.getElementById("reg_content");
    if (y.style.display === "none") {
       y.style.display = "block";
        x.style.display = "none";

     }
     else {
       x.style.display = "block";
        y.style.display ="none";
    }
}