
var el = document.getElementById("nextPage");
el.addEventListener("click", test);

var counter = 0;

function test(){
    console.log("the button was pressed");
    // counter+=1;
    // var x = location.href='news/' + counter;
    // document.getElementById("demo").innerHTML = x;
    console.log("Page location is " + window.location.href);
    var x =  window.location.href;
    var y = x.length - 1;
    //console.log(x[y-=1]);
    var numberString = x[y];
    console.log(numberString);
    var number = parseInt(numberString);
    console.log(typeof(number));
    number++;
    console.log(number);
    location.href='http://localhost:3000/news/' + number;
}