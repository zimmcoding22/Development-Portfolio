bgchVideoWrapper = document.getElementById("bgchVideoWrapper");
bgchVideoWrapperStyle = window.getComputedStyle(bgchVideoWrapper);
bgchDiv = document.getElementById("bgchDiv");
bgchDivStyle = window.getComputedStyle(bgchDiv);
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
appStoreLogo = document.getElementById("appStoreLogo");
appStoreLogoStyle = window.getComputedStyle(appStoreLogo);
tradingVideoWrapper = document.getElementById("tradingVideoWrapper");
tradingVideoWrapperStyle = window.getComputedStyle(tradingVideoWrapper);
launchpadDiv = document.getElementById("launchpadDiv");
launchpadDivStyle = window.getComputedStyle(launchpadDiv);
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
title = document.getElementById("title");
titleStyle = window.getComputedStyle(title);
typewrite = document.getElementById("typewrite");
typewriteStyle = window.getComputedStyle(typewrite);

var bgch_animations_one = false;
var bgch_animations_two = false;
var fitness_animations = false
var pole_game_animations = false;
var trading_animations = false;
var rocket_animation = false;
var width = window.innerWidth;

const main_css_tabs = {"home" : 350, "contact" : 920, "games" : 1480, "trading" : 2190};
const tablet_css_tabs = {"home" : 380, "contact" : 862, "games" : 1421, "trading" : 1850};
const main_css_animations = {"pole_game" : 700, "trading" : 1100, "fitness" : 2100, "bgch_one" : 2500, "bgch_two" : 2650};
const tablet_css_animations = {"pole_game" : 700, "trading" : 1250, "fitness" : 1900, "bgch_one" : 2500, "bgch_two" : 2600};

fadeIn(title);
fadeIn(typewrite);



function scrollWin(tab) { //scroll to appropriate tab
	width = window.innerWidth;
	var y_value = 0;
	if (tab === "home") {
		y_value = 0;
	} else if (tab === "contact") {
		if (width > screen_width_dividers["main"]) {
			y_value = 500;
		} 
		if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["main"]) {
			y_value = 500;
		} 
		if (width <= screen_width_dividers["mobile"]) {
			y_value = 515;
		}
	} else if (tab === "games") {
		if (width > screen_width_dividers["main"]) {
			y_value = 920;
		} 
		if (width > screen_width_dividers["small_tablet"] && width <= screen_width_dividers["main"]) {
			y_value = 1045;
		} 
		if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["small_tablet"]) {
			y_value = 1007;
		}
		if (width <= screen_width_dividers["mobile"]) {
			y_value = 970;
		}
	} else if (tab === "trading") {
		if (width > screen_width_dividers["main"]) {
			y_value = 1500;
		} 
		if (width > screen_width_dividers["small_tablet"] && width <= screen_width_dividers["main"]) {
			y_value = 1651;
		} 
		if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["small_tablet"]) {
			y_value = 1585;
		}
		if (width < screen_width_dividers["mobile"]) {
			y_value = 1550;
		}
	} else { //web apps
		if (width > screen_width_dividers["main"]) {
			y_value = 2193;
		} 
		if (width > screen_width_dividers["small_tablet"] && width <= screen_width_dividers["main"]) {
			y_value = 2225;
		} 
		if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["small_tablet"]) {
			y_value = 2165;
		}
		if (width < screen_width_dividers["mobile"]) {
			y_value = 2130;
		}
	}
	return(y_value);
}


function scrollHandler() {
	var y = window.scrollY;
	width = window.innerWidth;
	//console.log("y:", y);
	var animatePoleGame = () => {
		fadeIn(poleGameLogo);
		fadeIn(appStoreLogo);
		fadeIn(poleGameVideoWrapper);
		moveVideo(poleGameVideoWrapper, "left");
		fadeIn(poleGameDescription);
		fadeIn(poleGameStack);
		moveDescriptionAndStackUp(poleGameDescription, poleGameStack, "pg");
		pole_game_animations = true;
	}
	var animateTradingSystem = () => {
		fadeIn(launchpadDiv);
  	fadeIn(tradingVideoWrapper);
	  moveVideo(tradingVideoWrapper, "right");
	  moveLogoLeft(launchpadDiv, "trading");
	  trading_animations = true;
	}
	var animateFitnessApp = () => {
		fadeIn(fitnessAppTitle);
		fadeIn(fitnessAppVideoWrapper);
		fitness_animations = true;
	}
	var animateBgchOne = () => {
		fadeIn(bgchDiv);
		fadeIn(bgchTitle);
		fadeIn(bgchVideoWrapper);
		moveVideo(bgchVideoWrapper, "right");
		moveLogoLeft(bgchDiv, "bgch");
		bgch_animations_one = true;	   
	}
	var animateBgchTwo = (tag) => {
		fadeIn(bgchDescription);
		fadeIn(bgchStack);
		moveDescriptionAndStackUp(bgchDescription, bgchStack, tag);
  	bgch_animations_two = true;
	}
	//if user scrolls
	//navbar
	if (y > 100) {
		navid.className = "navbar navbar-expand-md navbar-dark moving-header fixed-top";
  	setLinkClass("moving-links");
  	//change size of logo
		if (width <= screen_width_dividers["mobile"]) {
  		jzArchivesLogo.style.width = "130px";
  		jzArchivesLogo.style.height = "70px";
  	}
  	if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["main"]) {
  		jzArchivesLogo.style.width = "150px";
  		jzArchivesLogo.style.height = "80px";
  	}
  	if (width > screen_width_dividers["main"]) {
  		jzArchivesLogo.style.width = "160px";
  		jzArchivesLogo.style.height = "85px";
  	}
  	jzArchivesLogo.src = "static/jzArchivesEmblemLight.png";
	  jzArchivesLogo.style.transition = ".3s";
  } else { //we are at the top of the page
		navid.className = "navbar navbar-expand-md navbar-dark bg-steel fixed-top";
  	setLinkClass("links");
  	if (width <= screen_width_dividers["mobile"]) {
  		jzArchivesLogo.style.width = "150px";
  		jzArchivesLogo.style.height = "70px";
  	}
		if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["tablet"]) {
  		jzArchivesLogo.style.width = "180px";
  		jzArchivesLogo.style.height = "85px";
  	} 
  	if (width > screen_width_dividers["tablet"] && width <= screen_width_dividers["main"]) {
  		jzArchivesLogo.style.width = "200px";
  		jzArchivesLogo.style.height = "95px";
  	} 
  	if (width > screen_width_dividers["main"]) {
  		jzArchivesLogo.style.width = "200px";
  		jzArchivesLogo.style.height = "100px";
  	}
  	jzArchivesLogo.src = "static/jzArchivesEmblem.png";
  }
  if (width > screen_width_dividers["main"]) {
 		//make header interactive
 		configureLinks(y, main_css_tabs);
  	//animations
		if (y >= main_css_animations["pole_game"] && !pole_game_animations) {
			animatePoleGame();
	 	}
	  if (y >= main_css_animations["trading"] && !trading_animations) {
	  	animateTradingSystem();
	  }
	  if (y >= main_css_animations["fitness"] && !fitness_animations) {
			animateFitnessApp();
	  }
	  if (y  >= main_css_animations["bgch_one"] && !bgch_animations_one) {
	  	animateBgchOne();
	  }
	  if (y > main_css_animations["bgch_two"] && !bgch_animations_two) {
	  	animateBgchTwo("bg2");
	  } 
	} 
	if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["main"]) {
	 	configureLinks(y, tablet_css_tabs);
  	//animations
		if (y >= tablet_css_animations["pole_game"] && !pole_game_animations) {
			animatePoleGame();
	 	}
	  if (y >= tablet_css_animations["trading"] && !trading_animations) {
	  	animateTradingSystem();
	  }
	  if (y >= tablet_css_animations["fitness"] && !fitness_animations) {
		 	animateFitnessApp();
	  }
	  if (y  >= tablet_css_animations["bgch_one"] && !bgch_animations_one) {
	  	animateBgchOne();
	  }
	  if (y > tablet_css_animations["bgch_two"] && !bgch_animations_two) {
	  	animateBgchTwo("");
	  } 
	} 
	if (width <= screen_width_dividers["mobile"]) { //leaving out animations on mobile for now because layout on mobile is totally different.
		configureLinks(y, tablet_css_tabs); //didn't need an extra one for mobile
		poleGameVideoWrapper.className = "show";
		poleGameLogo.className = "show";
		bgchVideoWrapper.className = "show";
		bgchDiv.className = "show";
		launchpadDiv.className = "show";
		tradingVideoWrapper.className = "show";
	}
}

//toggle which tab is highlighted as user scrolls
function configureLinks(y, tabs) {
	if (y > 100 && y < tabs["home"]) {
			setLinkClass("moving-links unSelect");
			homeLink.className = "moving-links select";
	  } 
	  if (y >= tabs["home"] && y < tabs["contact"]) { //we are at contact tab.
			setLinkClass("moving-links unSelect");
			contactLink.className = "moving-links select";
	  } 
	  if (y >= tabs["contact"] && y < tabs["games"]) {
			setLinkClass("moving-links unSelect");
			gamesLink.className = "moving-links select";				
	  } 
	  if (y >= tabs["games"] && y < tabs["trading"]) {
	  	setLinkClass("moving-links unSelect");
			tradingLink.className = "moving-links select";
	  } 
	  if (y >= tabs["trading"]) {
	  	setLinkClass("moving-links unSelect");
			webLink.className = "moving-links select";
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
  function frame() {
		if (opc === 1) {
		    clearInterval(id);
		} else {
			opc+=.005;
			var newOpc = opc.toString();
			element.style.opacity = newOpc;
		}
  }
}

//tag is being used as a direction too here.
function setPositionAndTarget(which_animation, tag) {  //May need a large screen too.
	var width = window.innerWidth;
	var pos = 0, target = 0;
	if (width > screen_width_dividers["main"]) {
		if (which_animation === "video") {
			target = 3;
			if (tag === "left") {
				pos = 0;
				target = -10;
			}
		} else if (which_animation === "stack") {
			pos = 120;
			target = 80;
			if (tag === "pg") {
				pos = 50
				target = 40;
			}
		} else { //logo
			pos = 60;
			target = 0;
			if (tag === "trading") {
				target = 10;
			}
		} 
	}
	if (width > screen_width_dividers["small_tablet"] && width <= screen_width_dividers["main"]) {
		if (which_animation === "video") {
			target = 5;
			if (tag === "left") {
				target = -7;
			} 
		} else if (which_animation === "stack") {
			pos = 200;
			target = 140;
			if (tag === "pg") {
				pos = 70;
				target = 40;
			}
		} else { //logo
			pos = 50;
			target = 10;
			if (tag === "bgch") {
				target = 0;
			}
		} 
	} 
	if (width < screen_width_dividers["small_tablet"]) {  //from mobile to small tablet. No animations on mobile because viewport is too small
		if (which_animation === "video") {
			target = 0;
			if (tag === "left") {
				target = -10;
			} 
		} else if (which_animation === "stack") {
			pos = 40;
			target = -50;
			if (tag === "pg") {
				pos = 120;
				target = 75;
			}
		} else { //logo
			pos = 100;
			target = 60;
		} 
	}
	return([pos, target]);
}


function moveVideo(element, direction) {
	var id = setInterval(frame, 5);
	var pos_and_target = setPositionAndTarget("video", direction);
	var pos = pos_and_target[0], target = pos_and_target[1];
	function frame() {
		if (direction === "right") {
			if (pos > target) {
				clearInterval(id);
			} else {
				pos+=.035;
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
	//console.log("pos: " + pos + " target: " + target + " tag: " + tag);
	function frame() {
		if (pos < target) {
			clearInterval(id);
		} else {
			if (tag === "pg") {
				pos-=.2;
			} else {
				pos-=.4;
			}
			if (tag === "pg" || tag === "bg2") {
				var offset = pos/3;
				if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["small_tablet"]) {
					offset = pos/1.15;
				}
				if (width <= screen_width_dividers["mobile"]) { //not being used right now
					offset = pos/3;
				}
				if (width > screen_width_dividers["main"]) {
					offset = pos/1.7;
				}
				description.style.top = offset + '%';
				stack.style.top = pos + '%';
			} else { 
				description.style.top = pos/3 + '%';
				stack.style.top = pos/1.85 + '%';
			}
		}
	}
}

function animateRocket(rocket) {
	width = window.innerWidth;
	if (width < screen_width_dividers["mobile"]) { //not displaying rocket on mobile for now because screen is too narrow and their isn't enough whitespace.
		rocket.style.opacity = 0;
		return;
	}
	var top_pos, left_pos, transform; //starting position of rocket in css sheet
	var target_one, target_two, target_three, target_four;
	var l_speed = .055, t_speed = .1, d_speed = .05;
	var movingUp = true, rotating = false, movingLeft = false, movingUpAndLeft = false, movingRight = false, curvingUp = false;
	var direction = "left";
	var firstMoveComplete = false, secondMoveComplete = false;
	if (width > screen_width_dividers["main"]) {
		top_pos = 50, left_pos = 90, transform = 0; 
	 	target_one = 40, target_two = 80, target_three = 30, target_four = 80;
	}
	if (width > screen_width_dividers["mobile"] && width <= screen_width_dividers["main"]) {
		top_pos = 90, left_pos = 90, transform = 0; 
		target_one = 80, target_two = 80, target_three = 65, target_four = 80;				
	}
	// mobile
	if (width <= screen_width_dividers["mobile"]) {
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
			if (direction === "left") {
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
			if (width > 1024 && width <= 1275 || width > 484 && width <= 790) { //for responsive design so rocket doesnt overlap with letters in background vid
				rocket.style.opacity = 0;
				rocket.style.transition = "opacity 1s";
			}
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
				rocket.style.opacity = 0;
				rocket.style.transition = "opacity 1.5s";
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
window.addEventListener("scroll", scrollHandler); //scrollHandler is the animation events driver


