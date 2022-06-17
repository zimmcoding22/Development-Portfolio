console.log("animations file");

function fadeIn(element, opc_increment) {
 	console.log("in animations function")
	var id = setInterval(frame, 5);
    var opc = 0;
    function frame() {
		if (opc == 1) {
		    clearInterval(id);
		    //console.log("full opacity: " + opc);
		} else {
			opc+=opc_increment;
			var newOpc = opc.toString();
			element.style.opacity = newOpc;
		}
  	}
}

// cardsDescription = document.getElementById("web");
// cardsDescriptionStyle = window.getComputedStyle(webLink);

