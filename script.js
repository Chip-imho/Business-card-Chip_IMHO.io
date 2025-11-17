const baseText = "I may not have a brain, gentlemen, but I do have an idea";
const dots = ["", ".", "..", "...", "..", ".", ""]; 
let index = 0;

function animateDots() {
    document.getElementById("typing-text").innerHTML = baseText + dots[index];
    index = (index + 1) % dots.length; 
    setTimeout(animateDots, 400); // speed (ms)
}

animateDots();


// SECOND LINE TYPING EFFECT (unchanged)
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
