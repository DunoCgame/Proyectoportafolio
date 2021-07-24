function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



let MyInfo = document.getElementById("MyInfo");
let Proyect = document.getElementById("MyProyect");
let Contact = document.getElementById("MyContact");
let Skill = document.getElementById("MySkill");

function SectionShow(message){
	
	if(message=="MyInfo"){
		
	MyInfo.style.display="block";
	Proyect.style.display="none";
	Contact.style.display="none";
	Skill.style.display="none";

	}	
	if(message=="Proyect"){
		
			MyInfo.style.display="none";
	Proyect.style.display="grid";
	Contact.style.display="none";
	Skill.style.display="none";

		
	}	
	if(message=="Contact"){
		
		MyInfo.style.display="none";
	Proyect.style.display="none";
	Contact.style.display="flex";
	Skill.style.display="none";

		
	}	
	if(message=="Skill"){
				
		MyInfo.style.display="none";
	Proyect.style.display="none";
	Contact.style.display="none";
	Skill.style.display="flex";
	}	

	
	
}

// var ArticulosImpar = document.getElementsByClassName("proyectos_articles");
 
 // if(ArticulosImpar.length%2==1){
	
	 // // ArticulosImpar[ArticulosImpar.length-1].style.width = "100%";	
	 // ArticulosImpar[ArticulosImpar.length].style.background= "red";	
	 
 // }

// var Menu = document.getElementById("Menu");
// var item = Menu.getElementsByClassName("link");
			
// for(var i = 0; i < item.length; i++){
	
	  // item[i].addEventListener("click", function(){
			// var current = document.getElementsByClassName("Menu-active-link");
			// current[0].className = current[0].className.replace("Menu-active-link", "");
			// this.className += " Menu-active-link";
	  // });
	  
// }
// SectionShow("MyInfo");
// https://stackoverflow.com/questions/8713596/how-to-retrieve-the-list-of-all-github-repositories-of-a-person

// https://api.github.com/users/USERNAME/repos
// https://api.github.com/users/DunoCgame/repos

/* https://dunocgame.github.io/DunoCgame_web/ */
/* https://github.com/DunoCgame/DunoCgame_web/blob/master/css/Mediaqery.css */

/* https://github.com/DunoCgame/MyBlogNews/blob/main/asset/css/mainResponsy.css */
/* object-fit:fill;
 */