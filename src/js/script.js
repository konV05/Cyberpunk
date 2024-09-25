document.addEventListener('DOMContentLoaded', () => {
    const promo = document.querySelector('.promo'),
          promoStyle = getComputedStyle(promo),
          promoBgUrls = ["url('../img/promo-bg/promo-bg-1.jpg')", "url('../img/promo-bg/promo-bg-2.jpg')", "url('../img/promo-bg/promo-bg-3.jpg')"];

    let bgIndex = 1;
    let changeBg = setInterval(() => {
        promo.style.setProperty('--bg-url', promoBgUrls[bgIndex]);
        bgIndex = (bgIndex === 2) ? 0 : bgIndex+1
    }, 10000);
});