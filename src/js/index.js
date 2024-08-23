import {getPageElements} from "./pageElements.js";
import {pageControls} from "./modules/pageControls.js";

const pageElements = getPageElements();
pageControls();
console.log('Тест', pageElements)

