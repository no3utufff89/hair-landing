import {getPageElements} from "../pageElements.js";

const pageElements = getPageElements();

export const closeCookie = () => {
    pageElements.cookieOkBtn.addEventListener('click', () => {
        pageElements.cookieBlock.classList.remove('active')
    });
}
export const hideTopLine = () => {
    pageElements.hotOfferCloseBtn.addEventListener('click', () => {
        pageElements.headerTopLine.classList.add('header__top_closed');
        pageElements.hotOfferCloseBtn.remove();
        pageElements.headerCenterLine.classList.add('header__center_normal');
    });
}
export const heroSectionDropdown = () => {
    pageElements.heroSelectBlock.addEventListener('click', () => {
        pageElements.heroDropdownList.classList.toggle('select-list_active');
        pageElements.heroCustomSelect.classList.toggle('custom-select_active')
    });
    pageElements.heroDropdownList.addEventListener('click', (event) => {
        const targetValue = event.target.innerText;
        pageElements.heroSelectOption.value = targetValue
        pageElements.heroCustomSelect.innerText = targetValue;
    });
}
export const tabsControl = () => {
    const allTabBtns = [...pageElements.tabBtn];
    const allTabBlocks = [...pageElements.tabBlock];
    //Установка стартовых стилей первой кнопки и карточки
    const setDefaultStyles = () => {
        allTabBtns[0].classList.add('propblem-btn_active');
        allTabBlocks[0].classList.add('problems-list__item_active');
        allTabBlocks[0].style.cssText = `
            border-top-left-radius: 0;
        `;
        allTabBlocks.at(-1).style.cssText = `
            border-top-right-radius: 0;
        `;
    }
    setDefaultStyles();
    allTabBtns.forEach((elem,index) => {
        elem.addEventListener('click',() => {
            for (let i = 0; i < allTabBlocks.length; i+=1) {
                if (index === i) {
                    allTabBlocks[i].classList.add('problems-list__item_active');
                    allTabBtns[i].classList.add('propblem-btn_active')
                } else {
                    allTabBlocks[i].classList.remove('problems-list__item_active');
                    allTabBtns[i].classList.remove('propblem-btn_active');
                }
            }
        })
    });
};

export const pageObserver = () => {
    const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               [...pageElements.animateLevel].forEach(item => {
                   item.classList.remove('work-stat__level_zero')
               })
               observer.unobserve(pageElements.ourWorkSection);
           }
       })
    }, {
        rootMargin: '0px',
    });
    observer.observe(pageElements.ourWorkSection);
};
export const paymentBlock = () => {
    const data = [
        {
            type: 'light',
            name: 'Лайт',
            halfPrice: '1000',
            totalPrice: '14950',
            img: 'rate_image-light.png'
        },
        {
            type: 'standard',
            name: 'Стандарт',
            halfPrice: '2000',
            totalPrice: '25700',
            img: 'rate_image-standard.png'
        },
        {
            type: 'premium',
            name: 'Премиум',
            halfPrice: '3000',
            totalPrice: '39800',
            img: 'rate_image-premium.png'
        },
    ];
   [...pageElements.tarifLabel].forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.target;
        const targetData = data.find(item => item.type === target.getAttribute('data-type'));
        pageElements.currentRateTotalPrice.innerText = targetData.totalPrice;
        pageElements.currentRateHalfPrice.innerText = targetData.halfPrice;
        pageElements.currentRateTitle.innerText = targetData.name;
        pageElements.currentRateImage.src = `./img/${targetData.img}`;

    })
   })


}

export const footerListActions = () => {

    [...pageElements.footerListDropdownTarget].forEach(element => {
        element.addEventListener('click', (e) => {
           const target = e.target;
            const toggleTarget = target.closest('.footer-list__parent')
            toggleTarget.classList.toggle('active-element')
        })
    })
}
