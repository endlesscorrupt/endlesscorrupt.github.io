let entered = false;
let can = false;

function gen() {
    var length = 500,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function applyText() {
    let element = document.getElementById("obfText");
    if (entered && can) {
        element.textContent += gen() + "\r\n"
    }
}

function turnPageToHell() {
    applyText();
    entered = true;

    document.getElementById("enterbtn").style.visibility = 'hidden'
    document.getElementById("bodymain").style.backgroundColor = "black"

    document.getElementById("scream").play();
    document.getElementById("theysawu").play();
}

function setCan() {
    can = true;
}

setTimeout(setCan, 2500);
setInterval(applyText, 1)