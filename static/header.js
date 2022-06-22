


function collections(event) {
	console.log("clicking collections");
	//remove page title and display Producers title
	document.getElementById("page_description").remove();
	var producerTitle = document.createElement("h1");
	producerTitle.setAttribute("id", "producer_title");
	producerTitle.style.position = "absolute";
	producerTitle.style.bottom = "300px";
	producerTitle.style.left = "50px";
	producerTitle.style.color = "black";
	producerTitle.style.zIndex = 2;
	let text = document.createTextNode("test");
	producerTitle.appendChild(text);
	document.body.appendChild(producerTitle);


}







//make producers title appear if clicked to start
collectionsTab = document.getElementById("collection");
collectionsTab.addEventListener("click", collections);