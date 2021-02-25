//variable que recibe el código de la función para añadir eventos
var aE = function() {
   function w3c_crearEvento(elemento, evento, mifuncion)  {
      elemento.addEventListener(evento, mifuncion, false);
   }
   function ie_crearEvento(elemento, evento, mifuncion)  {
      var fx = function() {
                 mifuncion.call(elemento); 
               };
      // Cuando usamos attachEvent dejamos de tener acceso al objeto this en mifuncion.
      // Para solucionar eso usaremos el método call() del objeto Function,
      // que nos permitirá asignar el puntero this para su uso dentro de la función.
      // El primer parámetro que pongamos en call será la referencia que se usará como 
      // objeto this dentro de nuestra función mifuncion. De esta manera solucionamos
      // el problema de acceder a this usando attachEvent en Internet Explorer.
      elemento.attachEvent('on' + evento, fx);
   }
   function tradicional_crearEvento( elemento, evento, mifuncion)  {
      evento='on'+evento;
      elemento.evento=mifuncion;
   }

   if (typeof window.addEventListener !== 'undefined') {
      return w3c_crearEvento;
   } else if (typeof window.attachEvent !== 'undefined') {
      return ie_crearEvento;
   } else {
      return tradicional_crearEvento;
   }
}(); // <= Esta es la parte más crítica - tiene que terminar en ()
//variable que recibe el código de la función para borrar eventos
var bE = function() {
   function w3c_borrarEvento(elemento, evento, mifuncion)  {
      elemento.removeEventListener(evento, mifuncion, false);
   }
   function ie_borrarEvento(elemento, evento, mifuncion)  {
      var fx = function() {
                 mifuncion.call(elemento); 
               };
      // Cuando usamos detachEvent dejamos de tener acceso al objeto this en mifuncion.
      // Para solucionar eso usaremos el método call() del objeto Function,
      // que nos permitirá asignar el puntero this para su uso dentro de la función.
      // El primer parámetro que pongamos en call será la referencia que se usará como 
      // objeto this dentro de nuestra función mifuncion. De esta manera solucionamos
      // el problema de acceder a this usando detachEvent en Internet Explorer.
      elemento.detachEvent('on' + evento, fx);
   }
   function tradicional_borrarEvento( elemento, evento, mifuncion)  {
      evento='on'+evento;
      elemento.evento=null;
   }

   if (typeof window.removeEventListener !== 'undefined') {
      return w3c_borrarEvento;
   } else if (typeof window.detachEvent !== 'undefined') {
      return ie_borrarEvento;
   } else {
      return tradicional_borrarEvento;
   }
}(); // <= Esta es la parte más crítica - tiene que terminar en ()
//función que rellena un select con valores cogidos de un array
//recibe
//	o - el objeto select
//	a - el array unidimensional que contiene los valores
//		asigna el contenido del array como texto
//		asigna el índice del array como propiedad value
function rellenaConArray(o,a){
	for (var i=0;i<a.length;i++){
		o.add(new Option(a[i],i));
	}
}
//función que busca un elemento en una array bidimensional
//recibe
//	e- elemento
//	a- array (es una array bidimensional y se busca el elemento en la posición 0 de cada fila
//retorna
//	p - posición donde encontró el elemento en el array o -1 si no lo encontró
function posicion(e,a){
	//recorro el array a buscando e-
	for(var p=0;p<a.length;p++){
		if (a[p][0]==e) {
			return p;
		}
	}
	return -1;
}
//función que dice si una opción ya está en la lista de opciones del select
//recibe
//	o-el objeto select
//	t-el texto de la opción a buscar
//retorna
//	true o false dependiendo de si esa opción ya está o no en la lista
function estaRepetidaOpcion(o,t){
	var opciones=o.options; //obtengo las opciones de ese select
	var i=0; //recorro las opciones buscando una igual a t
	while ((i<opciones.length-1)&&(opciones[i].text!=t)){
		i++;
	}
	if (opciones.length==0) return false;
	return (opciones[i].text==t);
}
//función que devuelve el texto de la opción seleccionada en un select
//recibe
//	o- es el objeto select
//retorna el texto de la opcion seleccionada
function textoOS(o){
	return o.options[o.selectedIndex].text;
}
//function que añade una opción preseleccionada a un select con un valor y texto concretos
//recibe
//	o- el objeto select
//	v-	valor de la opción
//	t- texto de la opción
function addOptPre(o,v,t){
	let opt=new Option(t,v);
	opt.selected=true;
	o.add(opt);
}
//función que rellena un select con los datos de un array bidimensional
//recibe
//	o- el objeto select que tiene que rellenar
//	a- el array bidimensional que contiene los valores de texto a incluir como opción en el select
//		el indice 0 de cada fila contiene el texto a añadir
//		la propiedad value coindice con el índice de la fila en el array
function rellenaSelect(o,a){
	//recorro el array
	for (var i=0;i<a.length;i++){
		o.add(new Option(a[i][0],i));
	}
}
//función que rellena un select con valores numéricos
//recibe
//	o - el objeto select
//	d - el valor más pequeño
//  h - el valor más grande
function rellenaConNumeros(o,d,h){
	for (var i=d;i<=h;i++){
		o.add(new Option(i,i));
	}
}
//función que rellena un select con los valores almacenados en un array unidimensional
//recibe
//	objeto select
//	array
function rellenarConArrayUni(oS,a){
	for (var i=0;i<a.length;i++){
		oS.add(new Option(a[i]));
	}
}
//función que obtiene los elementos a través de su name
//recibe	
//	n- el valor del name en el HTML
//	[e]- el elemento del dom que contiene esa atributo Name
//		si se omite se devolverán los objetos de todo el documento
//retorna los objetos cuyo name coincide con el que se pasa como argumento
function gN(n,e){
	if (e!=undefined) return e.getElementsByName(n);
	return document.getElementsByName(n);
}
//función que obtiene los elementos a través de su class
//recibe	
//	c- el valor del class en el HTML
//	[e]- el elemento del dom que contiene ese atributo class
//		si se omite se devolverán los objetos de todo el documento
//retorna los objetos cuyo class coincide con el que se pasa como argumento
function gC(c,e){
	if (e!=undefined) return e.getElementsByClassName(c);
	return document.getElementsByClassName(c);
}
//función que obtiene los elementos a través de su nombre de etiqueta (tag) que pertenezcan a un nodo o al documento
//recibe	
//	t- el nombre de etiqueta en el HTML
//	[e]- el elemento del dom que contiene esa etiqueta
//		si se omite se devolverán los objetos de todo el documento
//retorna los objetos cuya etiqueta coincide con la que se pasa como argumento
//	pertenecientes a un nodo o a todo el docuemnto
function gT(t,e){
	if (e!=undefined) return e.getElementsByTagName(t);
	return document.getElementsByTagName(t);
}
//función que obtiene un elemento a través de su id
//recibe	
//	i- el valor del id en el HTML
//retorna el objeto cuyo id coincide con el que se pasa como argumento
function gI(i){
	return document.getElementById(i);
}
//función que crea un elemento del dom
//recibe
//	e- elemento del DOM a crear
//retorna el elemento del DOM creado
function cE(e){
	return document.createElement(e);
}
//función que añade un nodo hijo a un elemento del DOM
//recibe
//	e- elemento del DOM al que se añade el hijo
//	n- nodo hijo a añadir
function aC(e,n){
	e.appendChild(n);
}
//función que establece el valor de un atributo en un elemento del DOM
//recibe
//	e-elemento del DOM
//	a-el nombre del atributo
//	v-valor del atributo
function sA(e,a,v){
	e.setAttribute(a,v);
}
//función que borra un atributo en un elemento del DOM
//recibe
//	e-elemento del DOM
//	a-el nombre del atributo
function rA(e,a){
	e.removeAttribute(a);
}
//función que crea un nodo de texto
//recibe
//	t- texto
//retorna el nodo de texto
function cT(t){
	return document.createTextNode(t);
}
