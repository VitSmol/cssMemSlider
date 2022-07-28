const imgCont = document.querySelector(`.image__container`),
      bullets = document.querySelectorAll(`.bullet`);
      bulletsLink = document.querySelectorAll(`.bullet__link`)


const activeBullet = n => {
    for (bullet of bullets) {
        bullet.classList.remove(`active`)
    }
    bullets[n].classList.add(`active`)
}
bulletsLink.forEach((el, ind) => {
    el.addEventListener(`click`, () => {
        imgCont.style.transform = `translateX(-${ind*474}px)`;
        activeBullet(ind)
    })
});

imgCont.addEventListener(`click`, () => console.log(`click`))

// console.log(bullets);