function addToggler(){
let toggler = document.querySelector(".toggler")
let toggledMenu = document.querySelector(".top")
toggler.addEventListener("click",()=>{
	console.log("lol")
	toggledMenu.classList.toggle("show");
})
}


function slider(){
let dots = document.querySelectorAll(".dot")
let slides = document.querySelectorAll(".slide")
dots.forEach((dot,index)=>{
	dot.addEventListener("click",()=>{
		slides.forEach(slide=>{
			slide.classList.remove("display")
		})
		dots.forEach(dot=>{
			dot.classList.remove("active")
		})
		dots[index].classList.add("active")
		slides[index].classList.add("display")
	})
})
}


addToggler();
slider()