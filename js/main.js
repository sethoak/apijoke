//get a joke and it it on the DOM

const data = {
    getNumberTrivia() {
      return fetch("https://icanhazdadjoke.com/", {
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      })
  
      .then(response => response.json())
      .then (paredResult => {
          console.log("joke", parsedResult);
          createjokediv (paredResult, joke);
      })

      