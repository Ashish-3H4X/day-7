const car = {
    name: "fiat",
    model: 500,
    color: "white"
}
demo.innerHTML = `  const car = {
  name:"fiat",<br>
 model: 500,<br>
 color: "white"<br>
 Result : <br>
  }`
demo1.innerHTML = car.name;
demo2.innerHTML = car.model;
demo3.innerHTML = car.color;


 

 const person ={};

  person.name ="Rahul";
  person.age=21;
  person.eyeColor="blue"

  emptyDemo.innerHTML=` const person ={};<br>
  person.name ="Rahul";<br>
  person.age=21;<br>
  person.eyeColor="blue"<br>
  <br>
  Result :<br>
`
emptyDemo1.innerHTML= person.name;
emptyDemo2.innerHTML=person.age;
emptyDemo3.innerHTML= person.eyeColor;


// creating the  object using new  key word 

 const student = new Object()
 // adding properties
  student.firstName ="Ashish";
  student.lastName ="Verma";
  student.age =21;
  student.eyeColor = "blue"

  newdemo.innerHTML= ` const student = new Object()<br>
 // adding properties<br>
  student.firstName ="Ashish";<br>
  student.lastName ="Verma";<br>
  student.age =21;<br>
  student.eyeColor = "blue"<br>
  Result: <br>
`
   newdemo1.innerHTML=student.firstName;
   newdemo2.innerHTML=student.lastName;
   newdemo3.innerHTML=student.age;
   newdemo4.innerHTML=student.eyeColor;