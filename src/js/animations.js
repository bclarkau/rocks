import gsap from 'gsap'

gsap.to("#glasses", {
	x: 100,
	scrollTrigger: {
		trigger: ".container",
		start: "top top",
		end: "+=2000", 
		scrub: 1,
		markers: true
	}
})