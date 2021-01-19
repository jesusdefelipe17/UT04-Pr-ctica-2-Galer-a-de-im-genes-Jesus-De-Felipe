function inicio() {

	//Creamos una galeria con un titulo
	let gallery = new Gallery("Galeria Jesus");

	//Añadimos categorias 

	let categoria = new Category("Categoria 1", "Esta es la prueba de categoria 1");
	let categoria2 = new Category("Categoria 2", "Esta es la prueba de categoria 2");
	let categoria4 = new Category("Categoria 4", "Esta es la prueba de categoria 4");
	let categoria5 = new Category("Categoria 5", "Esta es la prueba de categoria 5");

	//Error para categoria 
	//let categoria2 = new Category( undefined , "Esta es la prueba de categoria 1");

	//Creamos una categoria para poder añadirla 
	console.log("----------------------------------------------------")
	console.log("Añadir Categorias")
	console.log(gallery.addCategory(categoria));
	console.log(gallery.addCategory(categoria2));
	console.log(gallery.addCategory(categoria4));
	console.log(gallery.addCategory(categoria5));
	//console.log(gallery.addCategory(categoria5)); Generamos error de que existe la categoria
	console.log("----------------------------------------------------")
	console.log("Getter Categorias")
	console.log(gallery.getCategory().toString());
	console.log("----------------------------------------------------")
	console.log("Añadir Authores")
	let autor = new Author("Jesus","alumno@alumno.com","avatar1");
	console.log(gallery.addAuthor(autor));
	let autor2 = new Author("PEpe","alumno@alumno.com","avatar2");
	console.log(gallery.addAuthor(autor2));
	let autor4 = new Author("autor4","autor4@alumno.com","avatar4");
	console.log(gallery.addAuthor(autor4));
	let autor5= new Author("autor5","autor5@alumno.com","avatar5");
	console.log(gallery.addAuthor(autor5));
	let autor6= new Author("autor6","autor6@alumno.com","avatar6");
	console.log(gallery.addAuthor(autor6));
	console.log("----------------------------------------------------")
	console.log("Getter Authors")
	console.log(gallery.getAuthors().toString());
	console.log("----------------------------------------------------")
	//Vamos a borrar la categoria 1 que ya lo hemo creado al inicio
	console.log("Remove Category")
	console.log(gallery.removeCategory(categoria2));
	console.log(gallery.getCategory().toString());//Mostramos otra vez las categorias para demostrar que se ha borrado
	//Generamos error para mostrar 
	//let categoria3= new Category("categoria3");
	//console.log(gallery.removeCategory(categoria3));
	console.log("----------------------------------------------------")
	console.log("Añadir Imagen");
	//Tenemos que crear un author y una categoria y una coordenadas
	let coord4 = new Coords("-000123","232342");
	let imagen4 = new Portrait("imagent4","esta es la imagen 4","http:url.com",coord4);
	console.log(gallery.addImage(imagen4,categoria4,autor4));
	let coord5 = new Coords("-255555","0000033");
	let imagen5 = new Portrait("imagen5","esta es la imagen 5","http:url.com",coord5);
	console.log(gallery.addImage(imagen5,categoria5,autor5));
	let coord6 = new Coords("99999","-123456");
	let imagen6 = new Landscape("imagen6","esta es la imagen 6","http:url.com",coord6);
	console.log(gallery.addImage(imagen6,categoria5,autor6));
	let imagen7 = new Portrait("imagen7","esta es la imagen 7","http:url.com",coord6);
	console.log(gallery.addImage(imagen7));
	//Mostramos para ver que hay en el array de imagenes
	gallery.getImages();
	console.log("----------------------------------------------------")
	console.log("Remove Imagen")
	console.log(gallery.removeImage(imagen4));
	//Generamos error para que salte error si no encuentra este objeto para eliminar
	//let imagen8 = new Image("imagent8","esta es la imagen 8","http:url.com","-000123,232342");
	//console.log(gallery.removeImage(imagen8));
	console.log("----------------------------------------------------")
	console.log("Get CategoryImages")
	console.log(gallery.getCategoryImages(categoria5).toString());
	console.log("----------------------------------------------------")
	console.log("Remove Author")
	console.log(gallery.removeAuthor(autor));
	console.log("----------------------------------------------------")
	console.log("Get Author Images")
	console.log(gallery.getAuthorImages(autor5).toString());
	console.log("----------------------------------------------------")
	console.log("Get Portrait Images")
	console.log(gallery.getPortraits().toString());
	console.log("----------------------------------------------------")
	console.log("Get Landscape Images")
	console.log(gallery.getLandscapes().toString());
}