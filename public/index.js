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
    //Need to make it such that when the mouse leaves the hovered element and the element shown on hover, it'll make make the element shown on hover to disappear. Right now, it only does it for one, not for both
    hoveredElement.onmouseover = () => {
        showElement.classList.add('!grid');
    };
    // hoveredElement.onmouseleave = () =>{
    // 	showElement.classList.remove('!grid')
    // }
    showElement.onmouseleave = () => {
        showElement.classList.remove('!grid');
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
