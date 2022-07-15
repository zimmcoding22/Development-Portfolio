bgchVideoWrapper = document.getElementById("bgchVideoWrapper");
bgchVideoWrapperStyle = window.getComputedStyle(bgchVideoWrapper);
bgchLogo = document.getElementById("bgchLogo");
bgchLogoStyle = window.getComputedStyle(bgchLogo);
bgchTitle = document.getElementById("bgchTitle");
bgchTitleStyle = window.getComputedStyle(bgchTitle);
bgchDescription = document.getElementById("bgchDescription");
bgchDescriptionStyle = window.getComputedStyle(bgchDescription);
bgchStack = document.getElementById("bgchStack");
bgchStackStyle = window.getComputedStyle(bgchStack);
fitnessAppTitle = document.getElementById("fitnessAppTitle");
fitnessAppTitleStyle = window.getComputedStyle(fitnessAppTitle);
fitnessAppVideoWrapper = document.getElementById("fitnessAppVideoWrapper");
fitnessAppVideoWrapperStyle = window.getComputedStyle(fitnessAppVideoWrapper);
poleGameDescription = document.getElementById("poleGameDescription");
poleGameDescriptionStyle = window.getComputedStyle(poleGameDescription);
poleGameStack = document.getElementById("poleGameStack");
poleGameStackStyle = window.getComputedStyle(poleGameStack);
poleGameVideoWrapper = document.getElementById("poleGameVideoWrapper");
poleGameVideoWrapperStyle = window.getComputedStyle(poleGameVideoWrapper);
poleGameLogo = document.getElementById("poleGameLogo");
poleGameLogoStyle = window.getComputedStyle(poleGameLogo);
tradingVideoWrapper = document.getElementById("tradingVideoWrapper");
tradingVideoWrapperStyle = window.getComputedStyle(tradingVideoWrapper);
launchpadLogo = document.getElementById("launchpadLogo");
launchpadLogoStyle = window.getComputedStyle(launchpadLogo);
navid = document.getElementById("navid");
navidStyle = window.getComputedStyle(navid);
homeLink = document.getElementById("start");
homeLinkStyle = window.getComputedStyle(homeLink);
contactLink = document.getElementById("contact"); 
contactLinkStyle = window.getComputedStyle(contactLink);
gamesLink = document.getElementById("games"); 
gamesLinkStyle = window.getComputedStyle(gamesLink);
webLink = document.getElementById("web");
webLinkStyle = window.getComputedStyle(webLink);
tradingLink = document.getElementById("trading");
tradingLinkStyle = window.getComputedStyle(tradingLink);
cardsLink = document.getElementById("cards");
cardsLinkStyle = window.getComputedStyle(cardsLink);
jzArchivesLogo = document.getElementById("jzArchivesLogo");
jzArchivesLogoStyle = window.getComputedStyle(jzArchivesLogo);
rocket = document.getElementById("rocket");
rocketStyle = window.getComputedStyle(rocket);

bgch_animations_one = false;
bgch_animations_two = false;
fitness_animations = false
pole_game_animations = false;
trading_animations = false;
rocket_animation = false;
animation_width = 1200; //screen widths less than this will not display animations for now

main_css_tabs = {"home" : 500, "contact" : 992, "games" : 1651, "trading" : 2290};
tablet_css_tabs = {"home" : 380, "contact" : 862, "games" : 1421, "trading" : 1850};
main_css_animations = {"pole_game" : 700, "trading" : 1100, "fitness" : 2100, "bgch_one" : 2500, "bgch_two" : 2650};
tablet_css_animations = {"pole_game" : 700, "trading" : 1250, "fitness" : 1900, "bgch_one" : 2500, "bgch_two" : 2600};
screen_width_dividers = {"main" : 1450, "tablet" : 981, "mobile" : 480};


// function scrollWin(tab) { //scroll to appropriate tab
// 	var width = window.innerWidth;
// 	console.log("window width in scrollWin: " + width);
// 	var y_value = 0;
// 	if (tab == "home") {
// 		y_value = 0;
// 	} else if (tab == "contact") {
// 		if (width >= screen_width_dividers["main"]) {
// 			y_value = 500;
// 		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
// 			y_value = 500;
// 		} else {
// 			y_value = 140;
// 		}
// 	} else if (tab == "games") {
// 		if (width >= screen_width_dividers["main"]) {
// 			y_value = 992;
// 		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
// 			y_value = 1045;
// 		} else {
// 			y_value = 465;
// 		}
// 	} else if (tab == "trading") {
// 		if (width >= screen_width_dividers["main"]) {
// 			y_value = 1651;
// 		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
// 			y_value = 1650;
// 		} else {
// 			y_value = 940;
// 		}
// 	} else { //web apps
// 		if (width >= screen_width_dividers["main"]) {
// 			y_value = 2290;
// 		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
// 			y_value = 2225;
// 		} else {
// 			y_value = 1433;
// 		}
// 	}
// 	window.scrollTo({
// 	top: y_value,
// 	behavior: 'smooth'
// 	});
// }


function scrollWin(tab) { //scroll to appropriate tab
	var width = window.innerWidth;
	console.log("window width in scrollWin: " + width);
	var y_value = 0;
	if (tab == "home") {
		y_value = 0;
	} else if (tab == "contact") {
		if (width >= screen_width_dividers["main"]) {
			y_value = 500;
		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
			y_value = 500;
		} else {
			y_value = 140;
		}
	} else if (tab == "games") {
		if (width >= screen_width_dividers["main"]) {
			y_value = 992;
		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
			y_value = 1045;
		} else {
			y_value = 465;
		}
	} else if (tab == "trading") {
		if (width >= screen_width_dividers["main"]) {
			y_value = 1651;
		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
			y_value = 1650;
		} else {
			y_value = 940;
		}
	} else { //web apps
		if (width >= screen_width_dividers["main"]) {
			y_value = 2290;
		} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
			y_value = 2225;
		} else {
			y_value = 1433;
		}
	}
	return(y_value);
}



function myScrollFunc() {
	var y = window.scrollY;
	var width = window.innerWidth;
	//if user scrolls down at all
	//navbar
	if (y > 100) {
		navid.className = "navbar navbar-expand-md navbar-dark moving-header fixed-top";
  	setLinkClass("moving-links");
		if (width > screen_width_dividers["mobile"]) {
  		jzArchivesLogo.style.width = "150px";
  		jzArchivesLogo.style.height = "80px";
  	} else {
  		setLinkClass("links");
  		jzArchivesLogo.style.width = "110px";
  		jzArchivesLogo.style.height = "70px";
  	}
	  	jzArchivesLogo.style.transition = ".3s";
  } else { //we are at the top of the page
		navid.className = "navbar navbar-expand-md navbar-dark bg-steel fixed-top";
  	setLinkClass("links");
		if (width > screen_width_dividers["mobile"]) {
  		jzArchivesLogo.style.width = "190px";
  		jzArchivesLogo.style.height = "95px";
  	} else {
  		jzArchivesLogo.style.width = "130px";
  		jzArchivesLogo.style.height = "70px";
  	}
  }
  if (width >= screen_width_dividers["main"]) {
 		//make header interactive
  	if (y > 100 && y < main_css_tabs["home"]) {
  		//console.log("highlighting home tab");
			setLinkClass("moving-links unSelect");
			homeLink.className = "moving-links select";
  	} else if (y >= main_css_tabs["home"] && y < main_css_tabs["contact"]) {
			//console.log("highlighting contact tab");
			setLinkClass("moving-links unSelect");
			contactLink.className = "moving-links select";
  	} else if (y >= main_css_tabs["contact"] && y < main_css_tabs["games"]) {
			//console.log("highlighting games tab");
			setLinkClass("moving-links unSelect");
			gamesLink.className = "moving-links select";				
  	} else if (y >= main_css_tabs["games"] && y < main_css_tabs["trading"]) {
  		//console.log("highlighting trading tab");
  		setLinkClass("moving-links unSelect");
			tradingLink.className = "moving-links select";
  	} else if (y >= main_css_tabs["trading"]) {
  		//console.log("highlighting web apps tab");
  		setLinkClass("moving-links unSelect");
			webLink.className = "moving-links select";
  	} else {}
  	//animations
		if (y >= main_css_animations["pole_game"] && !pole_game_animations) {
			poleGameVideoWrapper.className = "show";
			poleGameLogo.className = "show";
			moveVideo(poleGameVideoWrapper, "left");
			moveDescriptionAndStackUp(poleGameDescription, poleGameStack, "pg");
			pole_game_animations = true;
	 	}
	  if (y >= main_css_animations["trading"] && !trading_animations) {
  		tradingVideoWrapper.className = "show";
  		launchpadLogo.className = "show";
	  	moveVideo(tradingVideoWrapper, "right");
	  	moveLogoLeft(launchpadLogo, "trading");
	  	trading_animations = true;
	  }
	  if (y >= main_css_animations["fitness"] && !fitness_animations) {
			fadeIn(fitnessAppTitle);
			fitness_animations = true;
	  }
	  if (y  >= main_css_animations["bgch_one"] && !bgch_animations_one) {
			bgchVideoWrapper.className = "show";
			bgchLogo.className = "show";
			fadeIn(bgchTitle);
			moveVideo(bgchVideoWrapper, "right");
			moveLogoLeft(bgchLogo, "bgch");
			bgch_animations_one = true;	   
	  }
	  if (y > main_css_animations["bgch_two"] && !bgch_animations_two) {
  		moveDescriptionAndStackUp(bgchDescription, bgchStack, "bg2");
  		bgch_animations_two = true;
	  } 
	} else if (width > screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
	 	//configure animations for tablet here
	 	if (y > 100 && y < tablet_css_tabs["home"]) {
			setLinkClass("moving-links unSelect");
			homeLink.className = "moving-links select";
	  	} else if (y >= tablet_css_tabs["home"] && y < tablet_css_tabs["contact"]) { //we are at contact tab.
			setLinkClass("moving-links unSelect");
			contactLink.className = "moving-links select";
	  	} else if (y >= tablet_css_tabs["contact"] && y < tablet_css_tabs["games"]) {
			setLinkClass("moving-links unSelect");
			gamesLink.className = "moving-links select";				
	  	} else if (y >= tablet_css_tabs["games"] && y < tablet_css_tabs["trading"]) {
	  		setLinkClass("moving-links unSelect");
			tradingLink.className = "moving-links select";
	  	} else if (y >= tablet_css_tabs["trading"]) {
	  		setLinkClass("moving-links unSelect");
			webLink.className = "moving-links select";
	  	} else {}
	  	
  		//animations
		if (y >= tablet_css_animations["pole_game"] && !pole_game_animations) {
		 	fadeIn(poleGameLogo);
		 	fadeIn(poleGameVideoWrapper);
			moveVideo(poleGameVideoWrapper, "left");
		 	moveDescriptionAndStackUp(poleGameDescription, poleGameStack, "pg");
			pole_game_animations = true;
	 	}
	  if (y >= tablet_css_animations["trading"] && !trading_animations) {
   		fadeIn(launchpadLogo);
   		fadeIn(tradingVideoWrapper);
	   	moveVideo(tradingVideoWrapper, "right");
	   	moveLogoLeft(launchpadLogo, "trading");
	   	trading_animations = true;
	  }
	  if (y >= tablet_css_animations["fitness"] && !fitness_animations) {
		 	fadeIn(fitnessAppTitle);
		 	fadeIn(fitnessAppVideoWrapper);
		 	fitness_animations = true;
	  }
	  if (y  >= tablet_css_animations["bgch_one"] && !bgch_animations_one) {
		 	bgchLogo.className = "show";
		 	fadeIn(bgchTitle);
		 	fadeIn(bgchVideoWrapper);
		 	moveVideo(bgchVideoWrapper, "right");
		 	moveLogoLeft(bgchLogo, "bgch");
		 	bgch_animations_one = true;	   
	  }
	  if (y > tablet_css_animations["bgch_two"] && !bgch_animations_two) {
  		moveDescriptionAndStackUp(bgchDescription, bgchStack, "");
  		bgch_animations_two = true;
	  } 
	} else {
		poleGameVideoWrapper.className = "show";
		poleGameLogo.className = "show";
		bgchVideoWrapper.className = "show";
		bgchLogo.className = "show";
		launchpadLogo.className = "show";
		tradingVideoWrapper.className = "show";
	}
}

function setLinkClass(c) {
	homeLink.className = c;
	contactLink.className = c;
	gamesLink.className = c;
	webLink.className = c;
	tradingLink.className = c;
	cardsLink.className = c;
}


//ANIMATIONS
function fadeIn(element) {
  var id = setInterval(frame, 5);
  var opc = 0;
  // var width = window.innerWidth;
  function frame() {
		if (opc == 1) {
		    clearInterval(id);
		    //console.log("full opacity: " + opc);
		} else {
			opc+=.005;
			var newOpc = opc.toString();
			element.style.opacity = newOpc;
		}
  }
}

//tag is being used as a direction too here.
function setPositionAndTarget(which_animation, tag) { 
	var width = window.innerWidth;
	var pos = 0, target = 0;
	if (width >= screen_width_dividers["main"]) {
		if (which_animation == "video") {
			target = 3;
			if (tag == "left") {
				pos = 70;
				target = 67;
			}
		} else if (which_animation == "stack") {
			pos = 70;
			target = 35;
			if (tag == "pg") {
				target = 50;
			}
		} else { //logo
			pos = 80;
			target = 68;
			if (tag == "trading") {
				target = 73;
			}
		} 
	} else if (width >= screen_width_dividers["tablet"] && width < screen_width_dividers["main"]) {
		if (which_animation == "video") {
			if (tag == "left") {
				pos = 0;
				target = -7;
			} else {
				pos = 0;
				target = 3;
			}
		} else if (which_animation == "stack") {
			pos = 200;
			target = 140;
			if (tag == "pg") {
				pos = 70;
				target = 40;
			}
		} else { //logo
			pos = 50;
			target = 10;
			if (tag == "bgch") {
				target = 0;
			}
		} 

	} else {
		console.log("add more settings"); //for mobile. May need a large screen too.
	}
	return([pos, target]);
}


function moveVideo(element, direction) {
	var id = setInterval(frame, 5);
	var pos_and_target = setPositionAndTarget("video", direction);
	var pos = pos_and_target[0], target = pos_and_target[1];
	function frame() {
		if (direction == "right") {
			if (pos > target) {
				clearInterval(id);
			} else {
				pos+=.015;
				element.style.left = pos + '%';	
			}
		} else {
			if (pos < target) {
				clearInterval(id);
			} else {
				pos-=.055;
				element.style.left = pos + '%';
			}
		}
	}
}

function moveLogoLeft(element, tag) { 
	var id = setInterval(frame, 5);
	var pos_and_target = setPositionAndTarget("logo", tag);
	var pos = pos_and_target[0], target = pos_and_target[1];
	function frame() {
		if (pos < target) {
			clearInterval(id);
		} else {
			pos-=.3;
			element.style.left = pos + '%';
		}
	}
}

function moveDescriptionAndStackUp(description, stack, tag) {
	var id = setInterval(frame, 5);
	var pos_and_target = setPositionAndTarget("stack", tag);
	var pos = pos_and_target[0], target = pos_and_target[1];
	console.log("pos: " + pos + " target: " + target + " tag: " + tag);
	function frame() {
		if (pos < target) {
			clearInterval(id);
		} else {
			if (tag == "pg") {
				pos-=.2;
			} else {
				pos-=.4;
			}
			if (tag == "pg" || tag == "bg2") {
				description.style.top = pos/3 + '%';
				stack.style.top = pos + '%';
			} else { 
				description.style.top = pos/3 + '%';
				stack.style.top = pos/1.85 + '%';
			}
		}
	}
}

function animateRocket(rocket) {
	var top_pos = 14, left_pos = 80, transform = 0; //starting position of rocket in css sheet
	var target_one = 13, target_two = 70, target_three = 10.5, target_four = 80;
	var l_speed = .055, t_speed = .1, d_speed = .2;
	var movingUp = true, rotating = false, movingLeft = false, movingUpAndLeft = false, movingRight = false, curvingUp = false;
	var direction = "left";
	var firstMoveComplete = false, secondMoveComplete = false;
	var width = window.innerWidth;
	if (width > screen_width_dividers["main"]) {
		top_pos = 15, left_pos = 80, transform = 0; 
	 	target_one = 10, target_two = 75, target_three = 10.5, target_four = 70;
	}
	// top_pos = 8.5, left_pos = 80, transform = 0; 
	// target_one = 7, target_two = 70, target_three = 10.5, target_four = 80;
	if (width <= screen_width_dividers["main"] && width > 775) {
		top_pos = 90, left_pos = 80, transform = 0; 
		target_one = 80, target_two = 70, target_three = 65, target_four = 80;				
	}
	// mobile
	if (width < 775) {
		top_pos = 6, left_pos = 80, transform = 0; 
		target_one = 5.5, target_two = 75, target_three = 5, target_four = 80;
		l_speed = .055, t_speed = .005, d_speed = .005;
	}
	var id = setInterval(frame, 5);
	function frame() {
		if (top_pos < target_one && !firstMoveComplete) {
			movingUp = false;
			rotating = true;
		}
		if (movingUp) {
			top_pos-=.025;
			rocket.style.top = top_pos +'%';
		}
		if (rotating) {
			if (direction == "left") {
				transform-=1.5;
			} else {
				transform+=1.5;
			}
			rocket.style.transform = "rotate(" + transform.toString() + "deg)";
		}
		if (rotating && transform < -100 && !firstMoveComplete) {
			rotating = false;
			firstMoveComplete = true;
			movingLeft = true;
		}
		if (rotating && transform > -30 && firstMoveComplete && !secondMoveComplete) {
			rotating = false;
			movingUpAndLeft = true;
		}
		if (rotating && transform > 90 && secondMoveComplete) {
			rotating = false;
			movingRight = true;
		}
		if (movingLeft) {
			top_pos+=.0025;
			left_pos-=.025;
			rocket.style.left = left_pos +'%';
			rocket.style.top = top_pos +'%';
		}
		if (movingLeft && left_pos < target_two) {
			movingLeft = false;
			direction = "right";
			rotating = true;
		}
		if (movingUpAndLeft && !movingRight) {
			top_pos-=d_speed;
			left_pos-=.015;
			rocket.style.left = left_pos +'%';
			rocket.style.top = top_pos +'%';
		}
		if (movingUpAndLeft && top_pos < target_three) {
			movingUpAndLeft = false;
			secondMoveComplete = true;
			rotating = true;
		}
		if (movingRight) {
			left_pos+=.055; 
			rocket.style.left = left_pos +'%';
		}
		if (movingRight && left_pos > target_four) {
			movingRight = false;
			curvingUp = true;
		}
		if (curvingUp) {
			if (transform > 0) {
				transform-=.4;
				left_pos+=l_speed;
				top_pos-=t_speed;
				rocket.style.left = left_pos +'%';
				rocket.style.top = top_pos +'%';
				rocket.style.transform = "rotate(" + transform.toString() + "deg)";
			} else {
				curvingUp = false;
				clearInterval(id);
			}

		}
	}
}
animateRocket(rocket);
window.addEventListener("scroll", myScrollFunc); //myScrollFunc is the animation events driver


