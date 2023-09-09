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
        e.classList.add("active") 
    })
})


// Responsive Menu Functionality
let menuIcon = document.querySelector(".fa-bars");
menuIcon.addEventListener("click", () =>{
    document.querySelector(".header .container ul").classList.toggle("drop-menu");
})

