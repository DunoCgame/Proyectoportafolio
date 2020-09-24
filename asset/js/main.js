console.log(GithudApi["name"]);
console.log(GithudApi.owner["avatar_url"]);
console.log(GithudApi.owner["url"]);
console.log(GithudApi.owner["repos_url"]);

// var obj = JSON.parse(GithudApi);
// console.log("objeto",obj);

 var i=0;
 var DUNOC="Luis E Duno C";
for( i=0; i<5; i++){
	
	//padre
	let Arcticle = document.createElement('Article');
	Arcticle.id="Articulos";
	Arcticle.className="article";	
	var Padre = document.getElementById('proyectos');
	Padre.appendChild(Arcticle);
	
		//hijos
		
		// contenedor imagenes
		let figure = document.createElement('figure');
		figure.className="img-containner";	
		var Padre2 = document.getElementsByClassName('article')[i];
		Padre2.appendChild(figure);
			// imagenes
			let imagen = document.createElement('img');
				imagen.src="asset/img/cyber.jpg";
				// imagen.src=GithudApi.owner["avatar_url"];
				imagen.id="img";
				imagen.className="IMG";
				imagen.title="IMG";
				imagen.alt="IMG";
				// imagen.style.width=TamañoWidth[Botoncarga];
				// imagen.style.height=TamañoHeigth[Botoncarga];
				// imagen.style.margin=EspacionIMG;
				var Padre3 =document.getElementsByClassName('img-containner')[i];
					Padre3.appendChild(imagen);
			
		//contenedor titulos
				let hgroup = document.createElement('hgroup');
				hgroup .id="Titulos-Containner";
				hgroup .className="titulos-containner";	
				var Padre4 = document.getElementsByClassName('article')[i];
				Padre4.appendChild(hgroup);
			//titulos
					let h2 = document.createElement('h2');
					h2.id="Title-Article";
					h2.className="title-article";	
					var Padre5 = document.getElementsByClassName('titulos-containner')[i];
					Padre5.appendChild(h2);
					
					// var t = document.createTextNode("Hello World");     // Create a text node
					var t = document.createTextNode(DUNOC);     // Create a text node
							h2.appendChild(t);  
					
					let p = document.createElement('p');
					p.id="Title-Article";
					p.className="title-article";	
					var Padre6 = document.getElementsByClassName('titulos-containner')[i];
					Padre6.appendChild(p);
					
					var node = document.createTextNode("This is new.");
					p.appendChild(node);
			
			//piede pagina
		
		
}