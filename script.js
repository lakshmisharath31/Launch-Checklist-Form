// Write your JavaScript code here!

// Write your JavaScript code here!



		function init(){
    debugger;
  var form=document.getElementById("launchForm");
  

			//Fetching json data
 			fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){   
 			 response.json().then(function(json) {
 			  var index=4;
 			  const container = document.getElementById("missionTarget").innerHTML=`
 			  <h2>Mission Destination</h2>
 				 <ol>
 					 <li>Name: ${json[index].name}</li>
 					 <li>Diameter: ${json[index].diameter}</li>
 					 <li>Star: ${json[index].star}</li>
 					 <li>Distance from Earth: ${json[index].distance}</li>
 					 <li>Number of Moons: ${json[index].moons}</li>
 				 </ol>
 			  <img src="${json[index].image}">
 					`
 				 });
 			});  
 					//json fetching ends here !
  		
    
    
    //form validation code goes here !
 			form.addEventListener("submit", function(event){
        event.preventDefault();
  var launchstatus=document.getElementById("launchStatus");
  var launchstatuscheck=document.getElementById("launchStatusCheck");
  var faultyitems=document.getElementById("faultyItems");
  var pilot=document.querySelector("input[name=pilotName]").value;
  var copilot=document.querySelector("input[name=copilotName]").value;
  var fuellevel=document.querySelector("input[name=fuelLevel]").value;
  var cargomass=document.querySelector("input[name=cargoMass]").value;
  var pilot_name=document.getElementById("pilotStatus");
  var copilot_name=document.getElementById("copilotStatus");
  var fuel_Status=document.getElementById("fuelStatus");
  var cargo_Status=document.getElementById("cargoStatus");
  var errormessage=document.getElementById("error");
   function frmVisbility(){
     launchstatuscheck.style.visibility="visible";
     launchstatus.style.visibility="visible";
     faultyitems.style.visibility="visible";    
    }
    function lunchStat(){
     launchstatus.innerHTML="Shuttle Not Ready for Launch" ;

     launchstatus.style ="Color:red";
    }
    function lchValidate(){
     frmVisbility();     
     lunchStat();   
    }


 				let messages=[];
 					if(pilot === "" || copilot===""||fuellevel===""||cargomass===""){
 							messages.push(window.alert("all fields are required!!"));			
 					}else if(!isNaN(pilot)){
 					 	messages.push(window.alert("please enter text for pilot name"));			
 					}else if(!isNaN(copilot)){
 							messages.push(window.alert("please enter text for Co-pilot name"));
      }else if(isNaN(Number(fuellevel))){
 							messages.push(window.alert("please input number for fuelLevel"));
 					} else if(isNaN(Number(cargomass))){
 								messages.push(window.alert("please input number for cargoMass"));
 					} else if(messages.length>0){
 								e.preventDefault()
 								errorElement.innerHTML=messages.join(",");
 					} else if(fuellevel < 10000){
 								lchValidate();
 								fuel_Status.innerHTML="fuel level too low for launch";
         fuel_Status.style = "Color:red" ;
 								pilot_name.innerHTML = "Pilot " + pilot  + " is ready for launch";
 								copilot_name.innerHTML = " Co-pilot "+copilot+" is ready for launch"; 							
 					} else if(cargomass > 10000){
 								lchValidate();
         cargo_Status.style="Color:red";
 								cargo_Status.innerHTML="Too much mass for the shuttle to take off! ";
 								pilot_name.innerHTML = "Pilot " + pilot  + " is ready for launch";
 								copilot_name.innerHTML = " Co-pilot "+copilot+" is ready for launch";	
 					} else {
 								frmVisbility();
 								launchstatus.innerHTML="Shuttle ready for launch.";
 								launchstatus.style="Color:green";   
 								pilot_name.innerHTML = "Pilot " + pilot  + " is ready for launch";
 								copilot_name.innerHTML = " Co-pilot "+copilot+" is ready for launch"; 
 					}
 			//form.action = launchstatus;
 			});
															
		}
		window.onload=init;   


