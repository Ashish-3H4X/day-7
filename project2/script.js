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

   /// nested object 

   myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
    console.log(myObj.myCars.car1);
    console.log(myObj.myCars.car2);
    console.log(myObj.myCars.car3);
    