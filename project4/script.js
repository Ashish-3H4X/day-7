// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x]+"";
    
    // text += person[x] + " ";
  };
  
  // Display the Text
  document.getElementById("demo").innerHTML = text;

// using object.values(); to display the value of object 

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };

 let myarr = Object.values(person1);
   console.log(typeof(myarr))
   console.log(myarr)


