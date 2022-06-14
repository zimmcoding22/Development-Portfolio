console.log("hello there");
videoDiv = document.getElementById("bgch");

var myScrollFunc = function() {
  var y = window.scrollY;
  console.log("y value: " + y);
  if (y >= 200) {
    videoDiv.className = "show"
    console.log("hey now");
  } else {
    videoDiv.className = "hide"
  }
};

window.addEventListener("scroll", myScrollFunc);