"use strict";
let searchBoxes = document.querySelectorAll(".search");
let headerSearchIcon = document.querySelector("#header-search-icon");
let categoriesButton = document.querySelectorAll('.categories');
let categoriesExt = document.querySelectorAll('.categories--extension');
let downArrow = document.querySelectorAll('.down-icon');
let upArrow = document.querySelectorAll('.up-icon');
let elementOnHover = document.querySelectorAll('.element-on-hover');
let beHovered = document.querySelectorAll('.beHovered');
let ssCards = document.querySelectorAll('.ss-cards');
let showDivOnElementHover = (hoveredElement, showElement) => {
    let mouseEntered = false;
    hoveredElement.onmouseover = () => {
        showElement.classList.add('!grid');
        setTimeout(() => showElement.classList.add('!opacity-100'), 200);
    };
    showElement.onmouseenter = () => mouseEntered = true;
    hoveredElement.onmouseleave = () => {
        setTimeout(() => { !mouseEntered ? (showElement.classList.remove('!opacity-100'), setTimeout(() => showElement.classList.remove('!grid'), 300)) : null; }, 300);
    };
    showElement.onmouseleave = () => {
        showElement.classList.remove('!opacity-100');
        setTimeout(() => showElement.classList.remove('!grid'), 300);
        return mouseEntered = false;
    };
};
categoriesButton.forEach(button => {
    button.onclick = () => {
        button.classList.toggle('!text-blue');
        categoriesExt.forEach((item, index) => {
            item.classList.toggle('!hidden');
            upArrow[index].classList.toggle('hidden');
            downArrow[index].classList.toggle('hidden');
        });
    };
});
beHovered.forEach((item, index) => {
    showDivOnElementHover(beHovered[index], elementOnHover[index]);
});
// ssCards.forEach(card =>{
// 	card.onmousemove = (e) =>{
// 		let x = `${e.clientX/360} ${e.clientX/e.clientY}deg`;
// 		console.log(x)
// 		card.style.rotate = x;
// 	}
// })
