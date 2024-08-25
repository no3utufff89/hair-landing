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
    const ourWorkSection = document.querySelector('.our-work');
    const animateLevel = document.querySelectorAll('.work-stat__level');
    //TABS & BLOCKS
    const tabBlock = document.querySelectorAll('.problem-card');
    const tabBtn = document.querySelectorAll('.propblem-btn');
    const tarifLabel = document.querySelectorAll('.rate-form__rate-radio');
    const tarifCheckbox = document.querySelectorAll('.standard-rate-input');
    const currentRateTotalPrice = document.querySelector('.current-rate__total-price');
    const currentRateHalfPrice = document.querySelector('.rate-form__half-price');
    const currentRateImage = document.querySelector('.rate-form__image');
    const currentRateTitle = document.querySelector('.current-rate__name');
    const footerListParent = document.querySelectorAll('.footer-list__parent');
    const footerListDropdownTarget = document.querySelectorAll('.list-element__top');
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
        ourWorkSection,
        animateLevel,
        tarifLabel,
        tarifCheckbox,
        currentRateTotalPrice,
        currentRateHalfPrice,
        currentRateImage,
        currentRateTitle,
        footerListParent,
        footerListDropdownTarget
    }
}