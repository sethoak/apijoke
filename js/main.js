import data from "./data.js";
import dom from "./dom.js";

data.getNumberTrivia().then(triviaResponse => dom.printToDom(triviaResponse));
