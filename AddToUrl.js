//Written By: Rakesh Yadav
//Created on: July 23rd, 2017

$(()=>{
      var currentURL = window.location.href;
      $.ajax(currentURL,
      {
         statusCode: {
         403: ()=> {
            if (!currentURL.includes("?campaign")){
				console.log("Current: "+currentURL);
                                var newURL = currentURL.concat("?campaign");
                                window.location.assign(newURL);
				console.log("newURL: "+newURL);

            }
         }
      }
   });   
});
                
