const container = document.querySelector(".container");
const card = document.querySelector(".card");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".card__img img");
const buy = document.querySelector(".buy");
const sizes = document.querySelector(".sizes");
const desc = document.querySelector(".card__info h3");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform =  `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transform = "none";

    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    desc.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    buy.style.transform = 'translateZ(75px)';
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    desc.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    buy.style.transform = 'translateZ(0px)';
});