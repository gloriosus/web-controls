function toggleDropdownMenu() {
	let dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
	if (dropdownMenu.style.display == "none") {
		dropdownMenu.style.display = "block";
	} else {
		dropdownMenu.style.display = "none";
	}
}

function selectItem() {
	document.getElementById("dropdown-input").value = this.innerHTML;
	toggleDropdownMenu();
}

window.onload = function() {
	var dropdownArrow = document.getElementsByClassName("dropdown-arrow")[0];
	dropdownArrow.addEventListener("click", toggleDropdownMenu);
	
	var dropdownList = document.getElementById("dropdown-list");
	for (i = 0; i <= dropdownList.childElementCount - 1; i++) {
		dropdownList.children[i].addEventListener("click", selectItem);
	}
}