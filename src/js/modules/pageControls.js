import { getPageElements } from "../pageElements.js";
const pageElements = getPageElements();
import {closeCookie, heroSectionDropdown, hideTopLine, pageObserver, tabsControl} from "./interaction.js";

export const pageControls = () => {
    //Работа с печеньками, дописать позже
    closeCookie();
    //Скрытие верхней линии
    hideTopLine();
    //Список в верхней секции (HERO section dropdown)
    heroSectionDropdown();
    //Табы секции  проблемы
    tabsControl()
    //Intersection Observer
    pageObserver();



}


