//Written By: Rakesh Yadav
//Created on: July 23rd, 2017        
                

   var currentURL = window.location.href;
//var currentURL="https://www.youtube.com/watch?v=RBumgq5yVrA"
	console.log(currentURL+" current");
	  if (!currentURL.includes("campaign")){
		if(currentURL.includes("www.youtube.com/watch?v=")){
			console.log(currentURL+" entered");
               	 	var newURL = currentURL.concat("&pbjreload=10%3Fcampaign");
			console.log(newURL+" new");
			// window.location.assign("https://www.youtube.com/?campaign=");
                	window.location.assign(newURL);
			//location.assign(newURL);
			console.log("assigned!");
		}
		else if(currentURL.includes("www.youtube.com")){
			console.log(currentURL+" entered");
               	 	var newURL = currentURL.concat("?campaign");
			console.log(newURL+" new");
			// window.location.assign("https://www.youtube.com/?campaign=");
                	window.location.assign(newURL);
			//location.assign(newURL);
			console.log("assigned!");
		}
		
           }
