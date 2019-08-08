const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Navagation
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];
const nav = document.querySelector("nav");
const childNavTwo = document.createElement("a")
const childNav = document.createElement("a");
childNavTwo.textContent = "Blog";
childNav.textContent = "Team";
nav.prepend(childNavTwo);
nav.appendChild(childNav);
// Nav styles
navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";
childNav.style.color = "green";
childNavTwo.style.color = "green";


//Image
const topImg = document.querySelector('#cta-img');
topImg.setAttribute("src", "img/header-img.png");

const midImg = document.querySelector("#middle-img");
midImg.setAttribute("src", "img/mid-page-accent.jpg");

//header
const headEl = document.querySelector(".cta-text h1");
headEl.textContent = "DOM\n IS\n AWESOME";
headEl.style.width = "300px";
headEl.style.display = "flex-wrap";
headEl.style.flexDirection = "column";
headEl.style.textAlign = "center";
const button = document.querySelector(".cta-text button");
button.textContent = "Get Started";

//Mid content
const midContent = document.querySelectorAll("h4");
midContent[0].textContent = "Features";
midContent[1].textContent = "About";
midContent[2].textContent = "Services";
midContent[3].textContent = "Product";
midContent[4].textContent = "Vision";

const mainPara = document.querySelectorAll(".main-content p");
mainPara[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPara[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPara[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPara[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainPara[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//Contact
const contact = document.querySelector(".contact h4");
contact.textContent = "Contact";
const address = document.querySelectorAll(".contact p");
address[0].textContent = "123 Way 456 Street \n Somewhere, USA"
address[1].textContent = "1 (888) 888-8888"
address[2].textContent = "sales@greatidea.io"
const contactContainer = document.querySelector(".contact");

//My Button
const myBtn = document.createElement("button");
myBtn.textContent = "Click Here";
myBtn.style.backgroundColor = "darkBlue";
myBtn.style.color = "white";
myBtn.style.padding = "10px 30px";
myBtn.style.cursor = "pointer";
contactContainer.appendChild(myBtn);
myBtn.addEventListener("click", myFunction)
function myFunction() {
  alert("Have Fun!")
}

//Footer
const copy = document.querySelector("footer p");
copy.textContent = "Copyright Great Idea! 2018";