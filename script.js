let menuIcon = document.getElementById("menu-icon");
let menuBar = document.getElementById("menu-bar");
let states = document.getElementById("states");
let ut = document.getElementById("uts");
let stateDropDown = document.getElementById("state-drop-down")
let utDropDown = document.getElementById("ut-drop-down");
let container = document.getElementById("container");

menuIcon.addEventListener("click", () => {
    if(menuBar.classList.contains("w-0")){
        menuBar.classList.remove("w-0");
        menuBar.classList.add("w-full", "sm:w-[45vw]", "md:w-[25vw]", "overflow-y-scroll", "scrollbar", "scrollbar-thin", "scrollbar-thumb-[#214656]", "scrollbar-track-[#e6e9eb]");
        container.classList.remove("hidden");
        container.classList.add("visible");
    } else {
        menuBar.classList.remove("w-full", "sm:w-[45vw]", "md:w-[25vw]", "overflow-y-scroll", "scrollbar", "scrollbar-thin", "scrollbar-thumb-[#214656]", "scrollbar-track-[#e6e9eb]");
        menuBar.classList.add("w-0");
        container.classList.remove("visible");
        container.classList.add("hidden");
    }
});

states.addEventListener("click", () => {
    if(stateDropDown.classList.contains("hidden")){
        stateDropDown.classList.remove("hidden");
        stateDropDown.classList.add("visible");
    } else {
        stateDropDown.classList.remove("visible");
        stateDropDown.classList.add("hidden");
    }
});

ut.addEventListener("click", () => {
    if(utDropDown.classList.contains("hidden")){
        utDropDown.classList.remove("hidden");
        utDropDown.classList.add("visible");
    } else {
        utDropDown.classList.remove("visible");
        utDropDown.classList.add("hidden");
    }
});

let stateList1 = ["andhrapradesh", "arunachalpradesh", "assam", "bihar", "chattisgarh", "goa", "gujarat", "harayana", "himachalpradesh", "jharkhand", "karnataka", "kerela", "madhyapradesh",  "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland", "oddisha", "punjab", "rajasthan", "sikkim", "tamilnadu", "telangana", "tripura", "uttarpradesh", "uttrakhand", "westbengal"];
let stateList2 = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chattisgarh", "Goa", "Gujarat", "Harayana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerela", "Madhya Pradesh",  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Oddisha", "Punjab", "Rajasthan", "Sikkim", "Tamilnadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttrakhand", "West Bengal"];
for(let state in stateList1){
    let states = stateList1[state];
    let stateDiv = stateDropDown.appendChild(document.createElement("div"));
    stateDiv.setAttribute("class", "p-2 text-[#214656] bg-[#e6e9eb] mt-0.5");
    let innerStateDiv = stateDiv.appendChild(document.createElement("div"));
    innerStateDiv.setAttribute("class", "ml-4 text-xl select-none");
    
    let anchor = document.createElement("a");
    anchor.setAttribute("href", `/states/${states}.html`);
    anchor.innerHTML = stateList2[state];
    innerStateDiv.appendChild(anchor);
}

let utList1 = ["andamanandnicobarislands", "chandigarh", "dadraandnagarhavelianddamananddiu", "dehli", "jammuandkashmir", "ladakh", "lakshadweep", "pudducherry"];
let utList2 = ["Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli & Daman and Diu", "Dehli", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Pudducherry"];
for(let ut in utList1){
    let uts = utList1[ut];
    let utDiv = utDropDown.appendChild(document.createElement("div"));
    utDiv.setAttribute("class", "p-2 text-[#214656] bg-[#e6e9eb] mt-0.5");
    let innerUtDiv = utDiv.appendChild(document.createElement("div"));
    innerUtDiv.setAttribute("class", "ml-4 text-xl select-none");
    
    let anchor = document.createElement("a");
    anchor.setAttribute("href", `/unionterritories/${uts}.html`);
    anchor.innerHTML = utList2[ut];
    innerUtDiv.appendChild(anchor);
}