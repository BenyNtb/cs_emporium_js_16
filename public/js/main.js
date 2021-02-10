let dark = document.querySelector(".black")
let light = document.querySelector(".blanc")
let emporium = document.querySelector(".empo")
let navbar = document.querySelectorAll(".nav-link")
let recents = document.getElementById("rp")
let pararecents = document.querySelectorAll("#para1")
let discover = document.getElementById("discover")
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
})
