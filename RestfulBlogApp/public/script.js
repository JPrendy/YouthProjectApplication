var el = document.getElementById("nextPage")
var la = document.getElementById("previousPage")
//Need these if conditions because we remove these buttons with the ids from the page under certain conditions
if(el !== null){
el.addEventListener("click", nextpage);
}
if(la !== null){
la.addEventListener("click", previouspage);
}
function nextpage(){
    console.log("the button was pressed");
    console.log("Page location is " + window.location.href);
    var x =  window.location.href;
    var y = x.length - 1;
    var numberString = x[y];
    console.log(numberString);
    var number = parseInt(numberString);
    console.log(typeof(number));
    number++;
    console.log(number);
    location.href='http://localhost:3000/news/' + number;
}

function previouspage(){
    console.log("Page location is " + window.location.href);
    var x =  window.location.href;
    var y = x.length - 1;
    var numberString = x[y];
    console.log(numberString);
    var number = parseInt(numberString);
    console.log(typeof(number));
    number--;
    console.log(number);
    location.href='http://localhost:3000/news/' + number;
}


//Fixed header example
// https://www.w3schools.com/howto/howto_js_sticky_header.asp

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// The guide how to do a fullscreen overlay
// https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

myNav = document.getElementById("myNav")
if(myNav !== null){
    myNav.style.display = "block"; 
}

  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }