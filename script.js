const baseText = "I may not have a brain, gentlemen, but I do have an idea";
const dots = ["", ".", "..", "...", "..", ".", ""]; 
let index = 0;

function animateDots() {
    document.getElementById("typing-text").innerHTML = baseText + dots[index];
    index = (index + 1) % dots.length; 
    setTimeout(animateDots, 400); 
}

animateDots();


const text2 = "Enthusiast of IT-world, scripting my way through the chaos ";
let j = 0;

function typeLine2() {
    if (j < text2.length) {
        document.getElementById("typing-text_1").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeLine2, 60);
    }
}

setTimeout(typeLine2, 1000);

function openMany() {
  for (let i = 0; i < 10; i++) {   
    window.open("https://tvtropes.org/pmwiki/pmwiki.php/Main/RulesOfTheInternet", "_blank");
  }
}

//  document.getElementById("copyText").onclick = () => { //
//    navigator.clipboard.writeText("bc1q35qfh0trml6m8z3dd2pqjcqvdd6jeueq9l0qmx"); //
//  }; //

