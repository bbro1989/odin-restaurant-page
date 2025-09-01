import "./styles.css"
import createHome from "./home.js"
import createAbout from "./about.js"
import createContact from "./contact.js"
import createMenu from "./menu.js"


document.addEventListener("DOMContentLoaded", () => {
    createHome();
    const header = document.querySelector('header');
    header.addEventListener("click", (event) =>{
         let button = event.target.id ; 
         if (button === "home"){
            createHome();
         }
         else if (button === "about"){
            createAbout();
         }
         else if (button === "contact"){
            createContact();
         }
         else if (button === "menu"){
            createMenu();
         }
    })
    
});

console.log("Hello there");