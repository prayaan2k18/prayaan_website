
function valid()
{

  
 
     var phoneExpression = /^[0-9]{10,12}$/;
      var emailExpression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-zA-Z]{2,3})$/;

     if (document.getElementById("stud_name").value == "")
    {  
        // alert('hello');
        document.getElementById("errname").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Enter Name</strong></div>";
        document.getElementById('stud_name').focus();
        return false;
    }
    else
    {
        document.getElementById("errname").innerHTML = "";
        var stud_name = document.getElementById("stud_name").value;
    }

    if (document.getElementById("stud_email").value == "")
    {
        document.getElementById("erremail").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Enter emailid</strong></div>";
       document.getElementById("stud_email").focus();
        return false;
    }
    else
    {
        document.getElementById("erremail").innerHTML = "";
    }
    if (emailExpression.test(document.getElementById("stud_email").value) == false)
    {
        document.getElementById("erremail").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Error in emailid</strong></div>";
        document.getElementById("stud_email").focus();
        return false;
    }
    else
    {
        document.getElementById("erremail").innerHTML = "";
        var stud_email = document.getElementById("stud_email").value;
    }




     if (document.getElementById("contact_num").value == "")
    {
        document.getElementById("errnum").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Error in contact number</strong></div>";
        document.etElementById("contact_num").focus();
        return false;
    }
    else
    {
        document.getElementById("errnum").innerHTML = "";
    }
    
    if (phoneExpression.test(document.getElementById("contact_num").value) == false)
    {
        document.getElementById("errnum").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Error in contact number</strong></div>";
        document.getElementById("contact_num").focus();
        return false;
    }
    else
    {
        document.getElementById("errnum").innerHTML = "";
        var contact_num = document.getElementById("contact_num").value;
    }
    
    

    if (document.getElementById("course").value == "")
    {
        document.getElementById("errcourse").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Enter course</strong></div>";
        document.getElementById("course").focus();
        return false;
    }
    else
    {
        document.getElementById("errcourse").innerHTML = "";
        var course = document.getElementById("course").value;
    }
    


    if (document.getElementById("college").value == "")
    {
        document.getElementById("errcollege").innerHTML = "<div class='alert alert-error fade in' style='height: 20px !important; ''><a class='close' data-dismiss='alert' href='#'>&times;</a><strong>Enter college</strong></div>";
        document.getElementById("college").focus();
        return false;
    }
    else
    {
        document.getElementById("errcollege").innerHTML = "";
        var college = document.getElementById("college").value;
    }


    var accomadation = document.getElementsByName('accomadation');

    for (var i = 0, length = accomadation.length; i < length; i++)
    {
     if (accomadation[i].checked)
     {
      var accomadation_status =  accomadation[i].value;  
      break;
     }
    }

    var food = document.getElementsByName('food');

    for (var i = 0, length = food.length; i < length; i++)
    {
     if (food[i].checked)
     {
      var food_status =  food[i].value;  
      break;
     }
    } 

    // var food = document.getElementsByName('food');

    // for (var i = 0, length = radios.length; i < length; i++)
    // {
    //  if (radios[i].checked)
    //  {
    //   var food_status =  radios[i].value;  
    //   break;
    //  }
    // }        



    if(document.getElementById("coding").checked)
    {
        var coding = 1;
    }
    else
    {
        var coding = 0;
    }
    var best =0;
    if(document.getElementById("best").checked == true)
    {
        best = 1;
    }
    else
    {
        best = 0 ;       
    }    
    var gaming =0;
    if(document.getElementById("gaming").checked == true)
    {
        gaming = 1;
    }
    else
    {
        gaming = 0;        
    }    
    var bestteam = 0;
    if(document.getElementById("bestteam").checked == true)
    {
        bestteam = 1;
    }
    else
    {
        bestteam = 0;        
    }    
    var mockcid = 0;
    if(document.getElementById("mockcid").checked == true)
    {
        mockcid = 1;
    }
    else
    {
        mockcid = 0;        
    }    
    var project = 0;
    if(document.getElementById("project").checked == true)
    {
        project = 1;
    }
    else
    {
        project = 0;        
    }    
    var quiz = 0;
    if(document.getElementById("quiz").checked == true)
    {
        quiz = 1;
    }
    else
    {
        quiz = 0;        
    }    
    var webhunt = 0;  
    if(document.getElementById("webhunt").checked == true)
    {
        webhunt = 1;
    }
    else
    {
        webhunt = 0;        
    }    
    var photo = 0;  
    if(document.getElementById("photo").checked == true)
    {
        photo = 1;
    }
    else
    {
        photo = 0;        
    }                                  
    
    var values = "stud_name="+stud_name+"&"+"stud_email="+stud_email+"&"+"contact_num="+contact_num+"&"+"course="+course+"&"+"college="+college+"&"+"accomadation="+accomadation_status+"&"+"food="+food_status+"&"+"coding="+coding+"&best="+best+"&gaming="+gaming+"&bestteam="+bestteam+"&mockcid="+mockcid+"&project="+project+"&quiz="+quiz+"&webhunt="+webhunt+"&photo="+photo;



    if (window.XMLHttpRequest) {
        // code for modern browsers
    rawFile = new XMLHttpRequest();
     } 
     else 
     {
        // code for old IE browsers
        rawFile = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    

    total = "register_action.php?"+values;
    rawFile.open("GET", total, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                alltext = rawFile.responseText;
                document.getElementById("stud_name").value = "";
                document.getElementById("stud_email").value = "";
                document.getElementById("contact_num").value = "";
                document.getElementById("course").value = "";
                document.getElementById("college").value = "";
                // swal("Successfully created Prayaan ID : "+alltext, "Please bring the Prayaan ID on event day. Check your Email ID", "success");
                swal("Registration "+alltext);
            }
        }
    }
    
    rawFile.send(null);
    

}