//tabla que almacena los datos de los artículos
//nombre del archivo con la imagen del artículo (las imagenes están en la carpeta images)
//nombre descriptivo del artículo
//precio mínimo por debajo del cual no se admiten pujas
var nArticuloPujado; //número de artículo por el que se está pujando
var articulos=[
		["abrigo.jpg","Abrigo de leopardo",1500],
		["collar.jpg","Collar emperatriz en acero",250],
		["comodaEspejo.jpg","Cómoda y espejo del siglo XVIII",25000],
		["deportivo.jpg","Deportivo ganador Montecarlo",500000],
		["gafas.jpg","Gafas de sol",50],
		["juegoTe.jpg","Té para 22 en plata",150],
		["naveStarW.jpg","Maqueta Nave Star Wars",250],
		["pendientes.jpg","pendientes brillantes y esmeraldas",3500],
		["pluma.jpg","Pluma Eisenhower",2000],
		["relojPared.jpg","Reloj de pared",300],
		["rolex.jpg","Rolex de acero",600],
		["sombreroMichaelJ.jpg","Sombrero de Michael Jackson",3000],
		["trajeMarilynM.jpg","Vestido Marilyn Monroe",25000],
		["vasijaMarcoP.jpg","Pila bautismal Marco Polo",40000]
	];
$(function(){
	generarTabla();
	$(":button").click(function(){
		if($(this).parent().prev().children("input").val()==""){
			alert("No has insertao la puja");
		}else if(isNaN($(this).parent().prev().children("input").val())){
			alert("No se introdujo un nomero");
		}else if(compararPuja($(this))){
			alert("La puja debe ser mayor al precio");

		}

		//console.log($(this).parent().prev().children("input").val());



	});
	
	function generarTabla(){
		$("#articulos caption").after(crearFilas()); 
		rellenarFilas();
		function crearFilas(){
			for(let i=0;i<articulos.length;i++){
				$("#articulos").append("<tr></tr>");
				for(let j=0;j<3;j++){
					$("#articulos tr:last-child").append("<td></td>");
				}
			}
		}
		function rellenarFilas(){
			$("tr td:nth-child(1)").each(function(index){
				$(this).append("<img/>");
				$(this).children().attr('src','images/'+articulos[index][0]);
			});
			$("tr td:nth-child(2)").each(function(index){
				$(this).append("<p/>");
				$(this).append("<input type=text>");
				$(this).children(":first").text(articulos[index][1]);
				//$(this).children(":last").html(articulos[index][2]);
			});
			$("tr td:nth-child(3)").each(function(index){
				$(this).append("<input type=button>");
				$(this).children().attr('value',"Pujar");
			});


			/* $("#articulos td:first-child").append("<img/>")
			$("img").attr('src','images/'+articulos[i][0]);  */
		}

	/* 	var tabla=$("<table>"); //creamos el elemento tabla
		//creo tantas tr como nFilas
		for (var nFila=0;nFila<nFilas;nFila++){
			var fila=$("<tr>"); //creamos un tr
			//$("table").append("<tr></tr>"); //otra forma de crear el tr
			//creo tantos td como nColumnas
			for (var nColumna=0;nColumna<nColumnas;nColumna++){
				var columna=$("<td>"); //creamos un td
				//$("table tr").append("<td></td>");
				//$("table:lastChild td  tendría que acceder al último td de la ultima fila
				if (nPixeles){//si se recibieran los píxeles como argumento se crearía el estilo del tamaño de cada celda
					//columna.css("width:"+nPixeles+",height:"+nPixeles); //equivalente a las 2 siguientes
					columna.css("width",nPixeles); 
					columna.css("height",nPixeles);
				}
				columna.attr("class","casilla"); //añadimos el atributo class con el valor casilla para poder seleccionar las celdas por su clase
				fila.append(columna); //añadimos la columna a la fila
				
			}
			tabla.append(fila); */
	}
	function compararPuja(e){
		for(i=0;i<articulos.length;i++){
			if(e.parent().prev().children("p").val()==articulos[i][1]){
				if(articulos[i][2]>e.parent().prev().children("input").val()){
					return true;
				}
			}
		}
	}



	
	
});	

