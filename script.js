//******************************************************************
//partie 1
//**************************************************************
class Animal {
	constructor(typeAnimal,nom,age){
		this.typeAnimal = typeAnimal;
		this.nom = nom;
		this.age = age;
	}
	//2
	showAttribut(){
		console.log("attribut de l'animal - le type :"+this.typeAnimal+" -le nom : "+this.nom+" -l'age : "+this.age);

	}
	attribut(){
		return this.typeAnimal+' '+this.nom+' '+this.age;
	}
}
//3
let chat = new Animal("chat","kitty",9);
let dog = new Animal("chien","doug",3);

dog.showAttribut();
chat.showAttribut();



let elt = document.getElementById('main');
elt.innerHTML = chat.attribut()+' et '+ dog.attribut();
//********************************************************
//partie 2
//***********************************************************

//1
let listAnimal= [];
//2
listAnimal.push(chat);
listAnimal.push(dog);
listAnimal.push(new Animal("chien","Bob",10));
listAnimal.push(new Animal("chien","yan",8));
listAnimal.push(new Animal("chat","Karl",12));

//3
function showAnimals(){
	listAnimalText="";

	for (let animal of listAnimal){
		console.log(animal.typeAnimal+' '+animal.nom+' '+animal.age);

		//4
		listAnimalText+='<li>'+animal.typeAnimal+' '+animal.nom+' '+animal.age+'</li>';
		let elt = document.getElementById('main');
		elt.innerHTML = "<ul>"+listAnimalText+"</ul>";
	}
}
showAnimals();
//**************************************************************
//partie 3
//**************************************************************

//1

function ageMoyen(typeAnimal){
	let nombreAnimal = 0;
	let sumDesAges =0;
	for (let animal of listAnimal){
		if (animal.typeAnimal === typeAnimal){
			nombreAnimal ++;
			sumDesAges+= animal.age;
		}
	}
	return 'Age moyen des '+typeAnimal+' ' +(sumDesAges / nombreAnimal)+' ans';
}
console.log(ageMoyen('chat'));

//2
function moyenne(){
let moyenChat = document.getElementById('age-chat');
moyenChat.innerHTML = "<h3>"+ageMoyen('chat')+"</h3>";

let moyenChien = document.getElementById('age-chien');
moyenChien.innerHTML = "<h3>"+ageMoyen('chien')+"</h3>";
}
moyenne();

//*********************************************************************
//partie 4 
//***********************************************************

const bouton = document.getElementById("button")
bouton.addEventListener('click', function(event) 
{
	event.preventDefault();   
	let type =document.getElementById("type-animal").value;
    let nom = document.getElementById("nom-animal").value;
    let age = document.getElementById("age-animal").value;
    let newAnimal = new Animal(type,nom,age/1);
    listAnimal.push(newAnimal);
    console.log(age);
    showAnimals();
    moyenne();
    
})



