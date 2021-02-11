// const { Button } = require("bootstrap")

let dark = document.querySelector(".black")
let light = document.querySelector(".blanc")
let emporium = document.querySelector(".empo")
let navbar = document.querySelectorAll(".nav-link")
let recents = document.getElementById("rp")
let pararecents = document.querySelectorAll("#para1")
let discover = document.getElementById("discover")
let nav1 = document.querySelector(".nav1")
console.log(dark);
console.log(light);

// CHANGEMENT DE THEME

     // DARK MODE
dark.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    emporium.style.color = "white";
    navbar.forEach(element => {
        element.style.color = "white"
    });
    recents.style.color = "white";
    pararecents.forEach(element => {
        element.style.color = "white"
    });
    discover.style.color = "white"
    // pararecents.style.color = "white";
    // header.style.color = "black"
    header.style.backgroundColor = "black"
})

        // LIGHT MODE
light.addEventListener('click', () => {
    document.body.style.backgroundColor = "white"
    emporium.style.color = "black"
    navbar.forEach(element => {
        element.style.color = "black"
    });
    recents.style.color = "black";
    pararecents.forEach(element => {
        element.style.color = "black"
    });
    discover.style.color = "black"
    header.style.backgroundColor = "white"
})

// CONNEXION / SUBSCRIPTION

let connexion = document.querySelector('#modale1')
let inscription = document.querySelector('#modale2')
let btnConnexion = document.querySelector('.connexion')
let btnSubs = document.querySelector('.inscription')
let btnSign = document.querySelector('.sign')
let popUp = document.querySelector('#connexion')
let btnClose = document.querySelector('.fermer')

    // CONNEXION

btnConnexion.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})   
btnSign.addEventListener('click', () => {
    popUp.style.display = "block"
})
btnClose.addEventListener('click', () => {
    popUp.style.display = "none"
})
btnSign.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})

btnSubs.addEventListener('click', () => {
    if (inscription.classList.contains('d-none')) {
        inscription.classList.remove('d-none')
    }
    connexion.classList.add('d-none')
})

// NAVBAR

let header = document.getElementById('header')
let emporium2 = document.querySelector('#emporium2')

let sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset>sticky) {
        header.classList.add("sticky")
        emporium2.style.display = "flex"
        emporium.style.display = "none"
    } else {
        header.classList.remove("sticky")
        emporium2.style.display = "none"
        emporium.style.display = "block"
    }
}

window.onscroll = function(){myFunction()}

// CAROUSEL

let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let carou = document.querySelector('.carou')

item1.addEventListener('click', () => {
    carou.style.transform = "translateX(0%)"
    carou.style.transition = "2s"
})

item2.addEventListener('click', () => {
    carou.style.transform = "translateX(-300px)"
    carou.style.transition = "2s"
})

item3.addEventListener('click', () => {
    carou.style.transform = "translateX(-600px)"
    carou.style.transition = "2s"
})

item4.addEventListener('click', () => {
    carou.style.transform = "translateX(-900px)"
    carou.style.transition = "2s"
})