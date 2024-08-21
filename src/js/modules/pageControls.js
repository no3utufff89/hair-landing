export const pageControls = (pageElements) => {
    pageElements.cookieOkBtn.addEventListener('click', () => {
        pageElements.cookieBlock.classList.remove('active')
    });

    pageElements.hotOfferCloseBtn.addEventListener('click', () => {
        pageElements.headerTopLine.classList.add('header__top_closed');
        pageElements.hotOfferCloseBtn.remove();
        pageElements.headerCenterLine.classList.add('header__center_normal');
    });

    pageElements.heroDropdownBtn.addEventListener('click', () => {
        pageElements.heroDropdownList.classList.toggle('hero-callback-list_active')
    })
}
