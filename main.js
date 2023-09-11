// Search Icon Functionality
let searchBar = document.querySelector(".search-bar");
let searchIcon = document.querySelector(".fa-magnifying-glass");
searchIcon.addEventListener("click", () => {
    if(getComputedStyle(searchBar).getPropertyValue("display") === "none"){
        searchBar.style.display= "block";
    }
    else{
        searchBar.style.display = "none";
    }
})

// Header Menu Functionality
let headerMenu = document.querySelectorAll(".header .container ul li");
headerMenu.forEach((e) => {
    e.addEventListener("click", () =>{
        headerMenu.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.classList.add("active");
        document.querySelector(".header .container ul").classList.remove("drop-menu");
    })
})

// Responsive Menu Functionality
let menuIcon = document.querySelector(".fa-bars");
menuIcon.addEventListener("click", () =>{
    document.querySelector(".header .container ul").classList.toggle("drop-menu");
})

//Landing image slider
let currentImage = 1;
let landingImages = Array.from(document.querySelectorAll(".landing .images img"));
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let indicators = Array.from(document.querySelectorAll(".indicators li"));

updateImage();
updateIndicator();

prev.addEventListener("click", () => {
    if(currentImage > 0){
        currentImage--;
        console.log(currentImage)
        updateImage();
        updateIndicator();
    }
})

next.addEventListener("click", () => {
    if(currentImage < landingImages.length -1){
        currentImage++;
        console.log(currentImage)
        updateImage();
        updateIndicator();
    }
})

function updateImage (){
    landingImages.forEach((e)=>{e.classList.remove("active")})
    landingImages[currentImage].classList.add("active");
}

function updateIndicator(){
    indicators.forEach((e)=>{e.classList.remove("active")})
    indicators[currentImage].classList.add("active");
}
