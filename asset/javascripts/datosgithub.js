const Conteinner_Proyectos ="MyProyect";
let result = [];


let Datapost = [
		{
		Title:"MySheetSprite",
		Link:"https://github.com/DunoCgame/MySheetSprite",
		Image:"asset/images/MySheetSprite_original.png",
		Description:"Versión MySheetSprite",
	},
		{
		Title:"HorizonFrontierJs",
		Link:"https://github.com/DunoCgame/HorizonFrontierJs",
		Image:"asset/images/Logo_HFjs.png",
		Description:"Library for the development of Video Games using Javascript technology",
	},
	{
		Title:"Asteroid-Destroyer",
		Link:"https://github.com/DunoCgame/Asteroid-Destroyer",
		Image:"asset/images/Asteroid-Destroyer.png",
		Description:"Asteroid Destroyer juego JavaScript",
	},

	{
		Title:"DunoCgame_web",
		Link:"https://github.com/DunoCgame/DunoCgame_web",
		Image:"asset/images/DunoCgameweb1.png",
		Description:"Maqueta Web para DunoCgame pagina de juegos",
	},

	{
		Title:"MyUndoRedo",
		Link:"https://github.com/DunoCgame/MyUndoRedo",
		Image:"asset/images/UndoRedo.png",
		Description:"Versión MySheetSprite",
	},
	{
		Title:"Memory_Game_Javascript",
		Link:"https://github.com/DunoCgame/Memory_Game_Javascript",
		Image:"asset/images/M3.png",
		Description:"Memory_Game_Javascript",
	},	
	{
		Title:"Expressjs-Server-easy",
		Link:"https://github.com/DunoCgame/Expressjs-Server-easy",
		Image:"asset/images/ExpressJS.jpg",
		Description:"Easy server in express",
	},
	{
		Title:"Failure_to_Move",
		Link:"https://github.com/DunoCgame/Failure_to_Move",
		Image:"asset/images/portada1.png",
		Description:"Game Javascript Electronjs",
	},
	{
		Title:"PortafolioWeb",
		Link:"https://github.com/DunoCgame/Proyectoportafolio/",
		Image:"asset/images//portaolio.jpg",
		Description:"Protafolio web de proyectos",
	}
]



// https://dunocgame.github.io/Proyectoportafolio/

// http://github.com/DunoCgame?tab=repositories

// console.log(Datapost);

// function Github_data(){
	// fetch('https://megaman-robot-masters.herokuapp.com/')
	// fetch('https://megaman-robot-masters.herokuapp.com/')
// fetch('https://api.github.com/users/DunoCgame/repos')
	
	
// .then(
    // function(response) {
      // if(response.status !== 200) {
			// console.log('Looks like there was a problem. Status Code: ' +
            // response.status);
        // return;
      // }

      // Examine the text in the response
      // response.json().then(function(data) {
        // console.log(data);
		
		// console.log(data[0].name+" "+data[0].git_url+" "+data[0].description);
		// Generante_post(data[0].name,data[0].description)
		
		
      
	  // });
    // }
  // )
  // .catch(function(err) {
    // console.log('Fetch Error :-S', err);
  // });
  
// }

// Github_data();

Generante_post(Datapost)
		ImpartPost();

let text =" Lorem Ipsum is simply dummy text of the printing and typesetting industry. 								Lorem Ipsum has been the industry's standard dummy text ever since the 1500 								s, when an unknown printer took a galley of type and scrambled it to make a type 								specimen book. It has survived not only five centuries, but also the leap into electronic 								typesetting, remaining essentially unchanged." ;

function Generante_post(info){
	
	// console.log(info)
	
	 for( let i=0; i<info.length; i++){
	 
  
  	//padre
	let Arcticle = document.createElement('Article');
		Arcticle.id="Articulos";
		Arcticle.className="proyectos_articles";	
		// Arcticle.style.background="red";	
			document.getElementById("MyProyect").appendChild(Arcticle);
 	
	/****Images****/
	let figure = document.createElement('figure');
		figure.className="images-containner";	
		document.getElementsByClassName('proyectos_articles')[i].appendChild(figure);;
	
	
	let imagen = document.createElement('img');
		imagen.src=info[i].Image;
		// imagen.src=GithudApi.owner["avatar_url"];
		imagen.className="images";
		imagen.title="IMG";
		document.getElementsByClassName('images-containner')[i].appendChild(imagen);;
			
	/************title******/

				let hgroup = document.createElement('hgroup');
				hgroup.className="Title-Containner";	
				document.getElementsByClassName('proyectos_articles')[i].appendChild(hgroup);
			//titulos
					let h2 = document.createElement('h2');
						h2.className="Title-Article";	
						document.getElementsByClassName('Title-Containner')[i].appendChild(h2);;
				//link
						let a = document.createElement('a');
						a.className="Link";	
						a.href=info[i].Link;	
						document.getElementsByClassName('Title-Article')[i].appendChild(a);;
						
						var Titlepost = document.createTextNode(info[i].Title);     // git_url  url Create a text node
								a.appendChild(Titlepost); 
	/************descripcion*****/
	
				


					let p = document.createElement('p');
					p.id="Title-Article";
					p.className="title-article";	
					document.getElementsByClassName('Title-Containner')[i].appendChild(p);
						
					/***texto de la descripcion***/	
					var node = document.createTextNode(info[i].Description);
					p.appendChild(node);
					/***texto de la descripcion***/

 }
	
	
	
}

function ImpartPost(){

var ArticulosImpar = document.getElementsByClassName("proyectos_articles");
var ImageImpar = document.getElementsByClassName("images");
 
	// console.log(ArticulosImpar.length);
	 
	 if(ArticulosImpar.length%2==1){
		
		 // ArticulosImpar[ArticulosImpar.length-1].style.gridColumn="1 / span 2";	
		 // ArticulosImpar[ArticulosImpar.length-1].style.height="200px";	
		 // ImageImpar[ArticulosImpar.length-1].style.width= "auto";	
		 
	 }
}
