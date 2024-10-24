enum timeSelection{
    morning = "9 to 12",
    afternon ="2 to 5",
    evening = "7 to 10"
}
const value : timeSelection
=timeSelection.evening
console.log(value);

enum student{
    noman = "004150",
     bilal = "004161",   
        akbar ="004149"
    }  
    

let value1 : student
=student.noman
console.log(value1);





let a = 1
while(a <=100) {
    console.log(`student${a}work`);
    a++;
    if(a===50){
        break;
    }

}

let i = 1 ;
while(i<11){
    console.log(`4 * ${i} = ${i*4} :`);
    i++
}

for(let a = 1; a<=100; a++){
    console.log(`student${a}work`);
    
    if(a===50){
        break;
    
}
}

let fruit =["apple","mango","banana","lychee","grap","orange"];
for(let i = 0 ; i< fruit.length ; i++){
    console.log(fruit[i]);
}





























