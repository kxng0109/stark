let searchBoxes = document.querySelectorAll(".search") as NodeListOf<HTMLInputElement>;
let headerSearchIcon = document.querySelector("#header-search-icon") as SVGElement;
let categoriesButton = document.querySelectorAll('.categories') as NodeListOf<HTMLDivElement>;
let categoriesExt = document.querySelectorAll('.categories--extension') as NodeListOf<HTMLDivElement>;
let downArrow = document.querySelectorAll('.down-icon') as NodeListOf<SVGElement>;
let upArrow = document.querySelectorAll('.up-icon') as NodeListOf<SVGElement>;
let elementOnHover = document.querySelectorAll('.element-on-hover') as NodeListOf<HTMLDivElement>;
let beHovered = document.querySelectorAll('.beHovered') as NodeListOf<HTMLAnchorElement>;


let showDivOnElementHover = (hoveredElement:HTMLElement, showElement: HTMLDivElement) => {
	//Need to make it such that when the mouse leaves the hovered element and the element shown on hover, it'll make make the element shown on hover to disappear. Right now, it only does it for one, not for both
	hoveredElement.onmouseover = () =>{
		showElement.classList.add('!grid')
	}

	// hoveredElement.onmouseleave = () =>{
	// 	showElement.classList.remove('!grid')
	// }

	showElement.onmouseleave = () =>{
		showElement.classList.remove('!grid')
	}
}

categoriesButton.forEach(button => {
	button.onclick = () => {
		button.classList.toggle('!text-blue')
		categoriesExt.forEach((item, index) => {
			item.classList.toggle('!hidden');
			upArrow[index].classList.toggle('hidden');
			downArrow[index].classList.toggle('hidden');
		})
	}	
})

beHovered.forEach((item, index) =>{
	showDivOnElementHover(beHovered[index], elementOnHover[index])
})