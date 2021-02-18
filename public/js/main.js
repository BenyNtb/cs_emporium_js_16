import{dark,light,emporium,navbar,recents,pararecents,discover,nav1,connexion,inscription,btnConnexion,btnSubs,btnSign,popUp,btnClose,header,emporium2,item1,item2,item3,item4,carou,div1} from "./event.js"

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
    nav1.style.backgroundColor = "white"
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
    // nav1.style.backgroundColor = "black"
})

// CONNEXION / SUBSCRIPTION

    // CONNEXION

// btnConnexion.addEventListener('click', () => {
//     document.body.backgroundColor = "grey"
    
// })
    
btnConnexion.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})   
btnSign.addEventListener('click', () => {
    popUp.style.display = "block"
    // btnSign.style.zIndex = "1"
    document.body.style.overflow='hidden'
    div1.style= " width: 100%; height: 100%;  background-color: rgba(0,0,0,.5); z-index: 999; position: fixed; "
})
btnClose.addEventListener('click', () => {
    popUp.style.display = "none"
    document.body.style.overflow= null
    div1.style= " display:none "
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


let sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset>sticky) {
        header.classList.add("sticky")
        emporium2.style.display = "flex"
        emporium.style.display = "none"
        popUp.style = "z-index: 1000"
    } else {
        header.classList.remove("sticky")
        emporium2.style.display = "none"
        emporium.style.display = "block"
    }
}

window.onscroll = function(){myFunction()}

// CAROUSEL

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