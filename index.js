// NAVBAR SCROLL

// let scrollTerakhir = 0

// window.addEventListener("scroll", function() {
// const NavbarAtas = document.querySelector("span")
// const NavbarBawah = document.querySelector("nav")
// const bungkusNav = document.querySelector("main")
// const scrollAtas = window.scrollY


// NavbarAtas.classList.toggle("hilang-1", scrollAtas > 50)
// NavbarAtas.classList.toggle("balik-1", scrollAtas < 50)
// bungkusNav.classList.add("sticky",scrollAtas > 0)


// NavbarBawah.classList.toggle("bg", scrollAtas > 50)



//   if (scrollAtas > scrollTerakhir && scrollAtas > 50) {
//     if(NavbarAtas.classList.contains("hilang-1")) {
//         setTimeout(() => {NavbarBawah.classList.add("hilang-2")} , 500)
//     }
        
//         NavbarBawah.classList.remove("balik-2")
        
//     } else if (scrollAtas < scrollTerakhir ) {
//         NavbarBawah.classList.add("balik-2")
//         NavbarBawah.classList.add("sticky")
//         NavbarBawah.classList.remove("hilang-2")
      
//     }

   
//     scrollTerakhir = scrollAtas;

// })

window.addEventListener("scroll", function() {
let header = document.querySelector("header")
let header2 = document.querySelector("nav")
let headerK = document.querySelector("main")

header.classList.toggle("shadow-lg", window.scrollY >50)
header.classList.toggle("bg-light", window.scrollY >50)


headerK.classList.toggle("shadow-lg", window.scrollY >50)
headerK.classList.toggle("bg-light", window.scrollY >50)
headerK.classList.toggle("scroll", window.scrollY >50)
header2.classList.toggle("scroll", window.scrollY >50)
})



 
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});