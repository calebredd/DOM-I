const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street<br>Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = document.querySelector("nav");
var a=document.createElement("a");
let navItem = nav.querySelectorAll("a");
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];

let cta = document.querySelector(".cta");
cta.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
cta.querySelector("button").innerHTML = siteContent["cta"]["button"];
cta.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"]);
let mainContent = document.querySelector(".main-content");
let topContent = mainContent
  .querySelector(".top-content")
  .querySelectorAll(".text-content");
topContent[0].querySelector("h4").innerHTML =
  siteContent["main-content"]["features-h4"];
topContent[0].querySelector("p").innerHTML =
  siteContent["main-content"]["features-content"];
topContent[1].querySelector("h4").innerHTML =
  siteContent["main-content"]["about-h4"];
topContent[1].querySelector("p").innerHTML =
  siteContent["main-content"]["about-content"];
mainContent
  .querySelector("#middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomContent = mainContent
  .querySelector(".bottom-content")
  .querySelectorAll(".text-content");
bottomContent[0].querySelector("h4").innerHTML =
  siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector("p").innerHTML =
  siteContent["main-content"]["services-content"];
bottomContent[1].querySelector("h4").innerHTML =
  siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector("p").innerHTML =
  siteContent["main-content"]["product-content"];
bottomContent[2].querySelector("h4").innerHTML =
  siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector("p").innerHTML =
  siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
contact.querySelector("h4").innerHTML = siteContent["contact"]["contact-h4"];
let contactP = contact.querySelectorAll("p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.querySelector("p").innerHTML = siteContent["footer"]["copyright"];


//Change each navItem color to green:
navItem.forEach(function (e) { return e.style.color = "green" });
//Add new items to nav:
nav.append("Last", a);
nav.prepend("First", a);

