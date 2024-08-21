export const getPageElements = () => {
    //BUTTONS
    const cookieOkBtn = document.querySelector('.cookie__btn')
    const hotOfferCloseBtn = document.querySelector('.header__close-btn');
    const heroDropdownBtn = document.querySelector('.top-element');
    //BLOCKS
    const cookieBlock = document.querySelector('.cookie');
    const headerTopLine = document.querySelector('.header__top');
    const headerCenterLine = document.querySelector('.header__center');
    const heroDropdownList = document.querySelector('.hero-callback-list');
    return {
        cookieOkBtn,
        cookieBlock,
        hotOfferCloseBtn,
        headerTopLine,
        headerCenterLine,
        heroDropdownBtn,
        heroDropdownList
    }
}