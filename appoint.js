//jscode for test boxes
function testbox1() {
    var e = document.getElementById("test_box1");
    e.classList.toggle("selected_chkbox");
    }
    function testbox2() {
    var e = document.getElementById("test_box2");
    e.classList.toggle("selected_chkbox");
    }
    function testbox3() {
    var e = document.getElementById("test_box3");
    e.classList.toggle("selected_chkbox");
    }
    function testbox4() {
    var e = document.getElementById("test_box4");
    e.classList.toggle("selected_chkbox");
  }

//set default value of date 
Date.prototype.toDateInputValue = function(){
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
}
document.getElementById("appdate").value = new Date().toDateInputValue();



//jscode for slot boxes
var btncontainer = document.getElementById("slot");
    var btns = btncontainer.getElementsByClassName("box");

    for (var i=0; i<btns.length; i++){
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("selected_radbox");
            current[0].className = current[0].className.replace(" selected_radbox");
            this.className += " selected_radbox";
        })
    }

//jscode for payment section
function openNav() {

  if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0){
    document.getElementById("myNav").style.width = "100%";
    var checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    document.getElementById('totalAmount').innerHTML= "₹"+checked*500;  
  }
  else 
  alert("Select at least one test to proceed");
  // document.getElementById('testBoxError').innerHTML= "Select atleast one test"
     
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


