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
        updateImage("left");
        updateIndicator();
    }
})

next.addEventListener("click", () => {
    if(currentImage < landingImages.length -1){
        currentImage++;
        console.log(currentImage)
        updateImage("right");
        updateIndicator();
    }
})
function updateImage (direction){
    landingImages.forEach((e)=>{e.classList.remove("w3-animate-left", "w3-animate-right")});
    landingImages[currentImage].classList.add(`w3-animate-${direction}`);
    landingImages.forEach((e)=>{e.classList.remove("active")})
    landingImages[currentImage].classList.add("active");
}
function updateIndicator(){
    indicators.forEach((e)=>{e.classList.remove("active")})
    indicators[currentImage].classList.add("active");
}

//Portfolio filter
let filterSelection = document.querySelectorAll(".portfolio-section .filters ul li");
filterSelection.forEach((e) => {
    e.addEventListener("click", ()=>{
        filterSelection.forEach((e)=>{e.classList.remove("active")})
        e.classList.add("active");
    })
})

//Skills rendering
let skills = document.querySelectorAll(".skill-percent");
let skillsArray = [95, 90, 74, 87];
let count = 0;
skills.forEach((e)=>{
    e.style.width = `${skillsArray[count]}%`;
    count++; 
})

//Skill onHover
let skillsHover = document.querySelectorAll(".skill");
skillsHover.forEach((e) => {
    e.addEventListener("mouseenter", ()=>{
        let percent = e.querySelector(".skill-percent").style.width;
        e.querySelector("span").style.setProperty('left', `calc(${percent} - 23px`);
        e.querySelector("span").innerText = percent
        e.querySelector("span").style.display = "block"
    })
    e.addEventListener("mouseleave", ()=>{
        e.querySelector("span").style.display = "none"
    })
})

//Submit button
let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", (e)=>{e.preventDefault();})
