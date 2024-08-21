import {getPageElements} from "./pageElements.js";
import {pageControls} from "./modules/pageControls.js";

const pageElements = getPageElements();
pageControls(pageElements)
console.log('Тест', pageElements)

