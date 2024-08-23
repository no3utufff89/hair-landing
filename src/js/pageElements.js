export const getPageElements = () => {
    //BUTTONS
    const cookieOkBtn = document.querySelector('.cookie__btn')
    const hotOfferCloseBtn = document.querySelector('.header__close-btn');
    const heroDropdownBtn = document.querySelector('.top-element');
    const heroCustomSelect = document.querySelector('.custom-select');
    const heroSelect = document.querySelector('.callback-select');
    const heroSelectBlock = document.querySelector('.hero-callback__controls');
    //BLOCKS
    const cookieBlock = document.querySelector('.cookie');
    const headerTopLine = document.querySelector('.header__top');
    const headerCenterLine = document.querySelector('.header__center');
    const heroDropdownList = document.querySelector('.select-list');
    const heroSelectOption = document.querySelector('.callback-select__option');
    //TABS & BLOCKS
    const tabBlock = document.querySelector('.problem-card');
    const tabBtn = document.querySelector('.propblem-btn');
    return {
        cookieOkBtn,
        cookieBlock,
        hotOfferCloseBtn,
        headerTopLine,
        headerCenterLine,
        heroDropdownBtn,
        heroDropdownList,
        heroCustomSelect,
        heroSelect,
        heroSelectBlock,
        heroSelectOption,
        tabBlock,
        tabBtn,
    }
}