//separate module for utility functions that are used across scripts

function detectBrowser() {         
		let userAgent = navigator.userAgent;
    let browserName; 
		if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
		}	else if (userAgent.match(/firefox|fxios/i)) {
    	browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
    	browserName = "safari";
    } else if (userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if (userAgent.match(/edg/i)){
      browserName = "edge";
    } else {
    	browserName="No browser detection";
    }
    return(browserName);         
  }


const screen_width_dividers = {"main" : 1450, "tablet" : 1024, "small_tablet" : 768, "mobile" : 483};