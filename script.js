let menuIcon = document.getElementById("menu-icon");
let menuBar = document.getElementById("menu-bar");
let states = document.getElementById("states");

menuIcon.addEventListener("click", () => {
    if(menuBar.classList.contains("w-0")){
        menuBar.classList.remove("w-0");
        menuBar.classList.add("w-full", "sm:w-[25vw]");
        states.classList.remove("hidden");
        states.classList.add("visible")
    } else {
        menuBar.classList.remove("w-full", "sm:w-[25vw]");
        menuBar.classList.add("w-0");
        states.classList.remove("visible");
        states.classList.add("hidden");
    }
})
