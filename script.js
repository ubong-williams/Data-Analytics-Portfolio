
// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("active");
        });
    });
}

// DYNAMIC COPYRIGHT YEAR

const year = new Date().getFullYear();

const footerYear = document.querySelector("#copyright-year");

if (footerYear) {
    footerYear.textContent = year;
}

// WEBSITE LOAD MESSAGE

console.log("Welcome to my Data Analytics Portfolio!");
