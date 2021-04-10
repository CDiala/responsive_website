// let menuIcon = document.getElementsByClassName("menu-icon");

let menuIcon = document.querySelector(".menu-icon");

let navList = document.querySelector(".nav-links");

let navLinks = document.querySelectorAll("ul.nav-links > li > a");

// console.log(navLinks);

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("collapsible--expanded");
    // console.log("menu-icon clicked.");
})

navLinks.forEach(item => {
    item.addEventListener("click", () => {
        navList.classList.toggle("collapsible--expanded");
    })
})


// let navChildren = navLinks[0].children;

// navLinks.forEach(item => {
//     console.log(item.textContent);
//     console.log(item.outerHTML);
//     console.log(item.innerHTML);
//     console.log(item.textContent.length);
// })

// console.log(navChildren[1].textContent);

// console.log(navLinks.item(0).children.item(0).textContent);

// console.log(window.location);

