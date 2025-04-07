const person = {
    firstName: "Rahul",
    lastName: "Verma",
    age: 20,
    id: 5566,
    fullName: function (params) {
        return this.firstName +""+ this.lastName;

    }

};
 demo.innerHTML =`const person = {<br>
  firstName: "John",<br>
  lastName: "Doe",<br>
  id: 5566,<br>
  fullName: function() {<br>
    return this.firstName + " " + this.lastName;<br>
  }
};<br>
 1 Line :  person.fullName<br>
 2 Line :person.fullName() <br>
 Result : <br>
` 
demoresult.innerHTML=` 1 Line :  ${person.fullName}<br>
 2 Line :${person.fullName()}`
demoresult.style.color="red"




const person1 = {
    firstName: "Rahul",
    lastName: "Verma",
    age: 20,
    id: 5566

    }
 person1.fullName = function (){
      return this.firstName + " " + this.lastName;
 };

   console.log(person1.fullName());
   

    // using javaScript method that is  toUpperCase :

    


const person2 = {
    firstName: "Rahul",
    lastName: "Verma",
    age: 20,
    id: 5566

    }
 person2.fullName = function (){
      return (this.firstName + " " + this.lastName).toUpperCase();
 };

   console.log(person2.fullName());
   