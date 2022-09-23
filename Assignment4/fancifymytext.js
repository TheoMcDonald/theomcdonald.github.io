function makeTextBigger(){
    document.getElementById("text").style.fontSize = "2em";
    alert("The text got bigger!");
}

function makeTextBold(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
    alert("The text turned bold!");
}

function makeTextNormal(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    alert("The text returned to normal!");
}

function makeTextUpperMoo(){
    var str = document.getElementById("text").value;
    str = str.toUpperCase();
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("text").value = str;
    alert("MOO!");
}


