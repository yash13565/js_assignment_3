//Async Await Vs .then()
/*
The word “async” before a function means one simple thing a function always returns a promise.The keyword await makes JavaScript wait until that promise is fulfilled and returns its result.In async await we have try catch block.

Promise is an object that returns the result of aysnchronus operation.It has three states pending,fulfilled,rejected.When your fetching data from api and data is being loading that time is called pending state.When your desired request gets completed it is in fulfilled state and when you dont get anything or error it is in rejected state.

*/

//First Example
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();

  //Second Example
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  //Third Example with set Timeout using async await to delay execution
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedExecution() {
    console.log('Start');
    await delay(2000);
    console.log('End');
  }
  
  delayedExecution();

  //Fourth Example with set Timeout using .then() to delay execution
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  console.log('Start');
  delay(2000)
    .then(() => {
      console.log('End');
    });

   // Using async/await and .then() together for asynchronous operations:
   async function processData() {
    try {
      const result1 = await performAsyncOperation1();
      console.log('Result 1:', result1);
  
      const result2 = await performAsyncOperation2();
      console.log('Result 2:', result2);
  
      const result3 = await performAsyncOperation3();
      console.log('Result 3:', result3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  processData()
    .then(() => {
      console.log('All operations completed.');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  