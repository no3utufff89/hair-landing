import { getPageElements } from "../pageElements.js";
const pageElements = getPageElements();
import {
    closeCookie,
    footerListActions,
    heroSectionDropdown,
    hideTopLine,
    pageObserver,
    paymentBlock,
    tabsControl
} from "./interaction.js";

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
    //Вкладки тарифов
    paymentBlock();
    footerListActions()



}


