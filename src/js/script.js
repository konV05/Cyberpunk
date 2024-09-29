document.addEventListener('DOMContentLoaded', () => {
    //Change bg
    const promo = document.querySelector('.promo'),
          promoStyle = getComputedStyle(promo),
          promoBgUrls = ["url('../img/promo-bg/promo-bg-1.jpg')", "url('../img/promo-bg/promo-bg-2.jpg')", "url('../img/promo-bg/promo-bg-3.jpg')"];

    let bgIndex = 1;
    let changeBg = setInterval(() => {
        promo.style.setProperty('--bg-url', promoBgUrls[bgIndex]);
        bgIndex = (bgIndex === 2) ? 0 : bgIndex+1
    }, 10000);


    //Container margin
    const container = document.querySelector('.container'),
          sectionBuyGame = document.querySelector('.buy-game');
    function returnContainerMargin () {
        sectionBuyGame.style.setProperty('--container-magin', getComputedStyle(container).marginRight);
    }   
    window.addEventListener('resize', () => {
        returnContainerMargin();
    });
    returnContainerMargin();

    //Animations
    const waitingElem = document.querySelectorAll('[data-animation]');

    function calcOffset(elem) {
        if (elem.offsetParent == document.querySelector('body')) {
            return elem.offsetTop;
        } else {
            return calcOffset(elem.offsetParent) + elem.offsetTop
        }
    }

    function checkTrigger() {
        const windowOffsetTop = window.innerHeight + window.scrollY;
        waitingElem.forEach((item) => {
            const itemOffset = calcOffset(item)
            if (itemOffset <= windowOffsetTop) {
                if(item.getAttribute('data-animation-delay') == null) {
                    item.classList.add(item.getAttribute('data-animation'))
                }
                else {
                    item.style.opacity = '0';
                    setTimeout(() =>{
                        item.style.opacity = '';
                        item.classList.add(item.getAttribute('data-animation'));
                        item.removeAttribute('data-animation-delay')
                    }, +item.getAttribute('data-animation-delay'));
                }
            }
        });
    }

    document.addEventListener('scroll', () =>{
        checkTrigger()
    });

    checkTrigger();
});