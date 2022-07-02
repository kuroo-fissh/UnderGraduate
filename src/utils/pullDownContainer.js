export function showMenu() {
	//这里实现交互
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.choose')) {
		let dropdowns = document.getElementsByClassName("dropdown-content");
		let i = 0;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

export function choose(e) {
	document.getElementById("modeButton").textContent = e.target.textContent;
}
