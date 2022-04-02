const badge = document.querySelector('.card__badge');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const info1 = document.querySelector('#info1');
const info2 = document.querySelector('#info2');
const quote3 = document.querySelector('#quote');
const sectionHero = document.querySelectorAll('section');
const option = {
    root: null,
    rootMargin: '100px',
    threshold: 1
};
const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting && entry.target.className == "card2") {
            badge.classList.add("animate-me");
            card2.classList.add("animate-me");

        }
        if (entry.isIntersecting && entry.target.className == "card3") {
            card3.classList.add("animate-me");
            quote3.classList.add("animate-me");
            info1.classList.add("animate-me");
            info2.classList.add("animate-me");

        }
    });
}, option)
sectionHero.forEach(sec => {
    sectionObserver.observe(sec);
});