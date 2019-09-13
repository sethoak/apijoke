const data = {
  getNumberTrivia() {
    return fetch("https://icanhazdadjoke.com/").then(response =>
      response.text()
    );
  }
};

export default data;
