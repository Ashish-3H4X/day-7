 const person ={
 firstName : "Rahul",
 lastName :"Verma",
 age: 20
 }

 let age = person.age;
    objectpr1.innerHTML= age;
let x = person["firstName"]
objectpr2.innerHTML= x
 
   


  delete person.age;

   console.log(person);