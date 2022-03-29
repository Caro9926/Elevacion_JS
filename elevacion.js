// Ejercicio 1
                                 
var hello = 'world'; 
console.log(hello);   

// Ejercicio 2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}

test();

//Ejercicio 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
print(); 

//Ejercicio 4
var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food);
eat();

//Ejercicio 5


var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
mean();


//Ejercicio 6


var genre = "disco";

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();

//Ejercicio 7

dojo = "san jose";

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();


//Ejercicio 8 - Bonus 
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
