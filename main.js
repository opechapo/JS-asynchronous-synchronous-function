// Synchronous code is executed line by line, in order, where each operation must complete before moving on to the next.

// Asynchronous code, on the other hand, allows operations to execute without blocking the main execution thread. This means other tasks can run while waiting for the async operation to complete.

//ASYCHRONOUS JS: one of the common one is : callback.
//Callback pattern is one of the ways to handle asynchronous
// Call back: is a function that is passed as an argument to another function

// Callback

// function prepareIngredentss(() =>{

// })

function myDisplayer(some) {
  return some;
}

function myFormatter(solution) {
  return `The result is ${solution}`;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  return myCallback(sum);
}

const result = myCalculator(5, 5, myDisplayer);
const result2 = myCalculator(5, 5, myFormatter);
console.log(result);
console.log(result2);


function performTask(taskName, callback){
  console.log(`Starting task: ${taskName}`);
  console.log("loading...");

  setTimeout(() => {
    console.log(`Finished task: ${taskName}`);
    callback()
    
  },10000) 
}


function taskCompleted() {
  console.log("Task is complete");
}

performTask("Download file", taskCompleted);


//Simulating Fetching a data from an API 

const Api = [
  {
    name: "Mubarak",
    language: "Birum"
  },
  {
    name: "Chapo",
    language:"Okun"
  },
  {
    name:"OG",
    language:"Yoruba"
  },
  {
    name:"Anate",
    language:"Ebira"
  }
]


function fetchData(callback){

 console.log("Loading...");


  setTimeout(() => {
   console.log("data fetched Successfully");
   const data = Api.find(person => person.name === "Anate")
   callback(data)
   
  }, 1000)
}

function personLanguage (data){
  console.log(data.language);
  
}

fetchData(personLanguage)




//PROMISE: A modern way to handle asychronous operation.Representing the eventual completion or failure of an operation and its resulting value.

// PROMISE Syntax

// function fetchStudents(){
//   return new Promise(() => {})
// }


function fetchStudents(){
  return new Promise((resolve,reject) => {

    // Simulate the data fetching

    setTimeout(() =>{
      const success = true
      if (success) {
        const data = Api.find(person => person.name === "Chapo")
        resolve(data)
        
      } else {
        reject(new Error(`Failed to get the Data`))
        
      }
    }, 3000)
  })}

  // Using the fetchStudents function with promise

  fetchStudents().then((data) =>{
    console.log(data);
     }).catch((error) => {
      console.error("Name does not Exists",error)
      
     })





     

