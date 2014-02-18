//variables
//defined with 'var'
var a = "Ana"
var b = "Brandon"
var x = 10
var y = 12

//Debugging (alerts, comments, the console)

//To alert, use:
alert("Welcome");

// This is a single line comment
/*This is a multi-
line-
comment
*/

//To log, use:
console.log("This logs into the console");

//Different data types
	//String ="This is a string"
	//Numbers = 5,3,7,8,9
	//Boolean is a true or false think geometry ana!!!
	//Undefined has no value/ variable with no value


//Arrays

//Can hold a collection of data
	//["Ana","Brandon","Susan","Lucy"];

//Can hold different data types
	//["Ana",10,22,"Lucy"];

//Can be stored in variables
	//var familyNames = ["Ana","Brandon","Susan","Lucy"];

//Testing
//Any test returns a boolean true or false
//Testing equality of strings
//"Ana"==="Susan"//Using three equals signs instead of two also checks the object type

//Testing Inequality
//"Ana" !== "Susan"
//>true
//Greater than
//80>3
//>true

//Less than
//80<3
//>false

//Greater than or equal to
//50>=3
//>true

//Less than or equal to 
//40<=60
//>true

//Logic
//The control flow of your program

//functions
//A function is a way to encapsulate code for later use
//Function can take arguments, which are used as variables inside them
function addTwo(some_number){ //some_number acts as the argument & addTwo is the var
	return some_number + 2;}
console.log(addTwo(4));

//three functions

function multipleTwice(anyNumber){
	return anyNumber * 2;}
	alert(multipleTwice(6));


function fullName(firstName, lastName){
	return alert(firstName + " " + lastName);
}
fullName("Ana","Khadivi")

function Brandon(welcome){
	return alert(welcome + "Brandon Dickerson");
}
Brandon("Congratz! You are the winner of a BRAND NEW IPOD,")
