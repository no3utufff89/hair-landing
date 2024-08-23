import { getPageElements } from "../pageElements.js";
const pageElements = getPageElements();

export const pageControls = () => {
    pageElements.cookieOkBtn.addEventListener('click', () => {
        pageElements.cookieBlock.classList.remove('active')
    });

    pageElements.hotOfferCloseBtn.addEventListener('click', () => {
        pageElements.headerTopLine.classList.add('header__top_closed');
        pageElements.hotOfferCloseBtn.remove();
        pageElements.headerCenterLine.classList.add('header__center_normal');
    });

    pageElements.heroSelectBlock.addEventListener('click', () => {
        pageElements.heroDropdownList.classList.toggle('select-list_active');
        pageElements.heroCustomSelect.classList.toggle('custom-select_active')
    });
    pageElements.heroDropdownList.addEventListener('click', (event) => {
        const targetValue = event.target.innerText;
        pageElements.heroSelectOption.value = targetValue
        pageElements.heroCustomSelect.innerText = targetValue;
       
       
    })


}


