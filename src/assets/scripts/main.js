/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');

  
} )();


//var anchors = [].slice.call(document.querySelector(".anchors").firstElementChild.children);
//var pageable = new Pageable("#content", {
	//animation: 400,
	//onInit: init,
	//events: {
		//mouse: false
	//}
//});

//const pageable = new Pageable("#content", {
	//interval: 400,
	//delay: 300,
	// orientation: "horizontal",
	// easing: easings.easeOutBounce,
	//onInit: init,
	/*onBeforeStart: function(x,y) {
		console.log("Start:", x,y);
		this.pages.forEach((page, i) => {
			page.firstElementChild.classList.remove("active");
		});	
	},
	onScroll: function(y) {
		console.log("Scroll:", Math.round(y));
	},
	onFinish: function(data) {
		console.log("Finish:", data);
		this.pages.forEach((page, i) => {
			page.firstElementChild.classList.toggle("active", i === this.index);
			
			anchors.firstElementChild.children[i].firstElementChild.classList.toggle("active", i === this.index);
		});	
	},*/
//});

function init2(pages) {
	const frag = document.createDocumentFragment();
  console.log(pages);
  console.log(pages[0]);
  
	pages[0].firstElementChild.classList.add("active");
	pages.forEach((page, i) => {
		const id = page.id;
		const text = `${id.charAt(0).toUpperCase()}${id.substr(1)}`;
		

		const li = document.createElement("li");
		const a = document.createElement("a");
		
		a.href = `#${page.id}`;
		
		a.textContent = text.replace("-", " ");
		
		if ( i === 0 ) {
			a.classList.add("active");
		}
		
		li.appendChild(a);
		frag.appendChild(li);
	});
	
	anchors.firstElementChild.appendChild(frag);
}





function init() {
	
	var that = this;
	
	listeners.forEach(function (listener) {
		var item = document.createElement("li");
		item.textContent = listener;
		list.appendChild(item);

		that.on(listener, function (data) {

			item.classList.add("active");

			setTimeout(function () {
				item.classList.remove("active");
			}, 200);

			if (listener === "scroll.end") {
				setTimeout(function () {
					Array.from(list.children).forEach(function (child) {
						return child.classList.remove("active");
					});
				}, 400);
			}
		});
	});	

	window.bar = new MiniBar('#scroll', {
		alwaysShowBars: true
	});	
	
}



const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);