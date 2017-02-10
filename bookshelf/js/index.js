function searchBarUp(e) {
	// body...	
	var text = sBar.value.trim();
	if(text.length > 0) {
		MainBar = document.querySelectorAll(".main-search-div")[0];	
		MainBar.className = "search-div";
	}
}
function menuOpen(argument) {
	var menuClass = this.className;
	if(menuClass="menu-button") {		
		x = document.querySelectorAll(".float-menu")[0].style;					
		
	}
}
var sBar = document.querySelectorAll(".main-search-div > input[type=text]")[0];
sBar.addEventListener('keyup',searchBarUp,false);

var menuButton = document.querySelectorAll(".menu-button")[0];
menuButton.addEventListener('click',menuOpen,false);
