const dom = {
  printToDom(trivia) {
    const containerRef = document.querySelector("#container");
    let triviaHtml = `<p>Number Trivia: ${trivia}</p>`;
    containerRef.innerHTML = triviaHtml;
  }
};

export default dom;
