let clicked = 0;

function enterSecret() {
    const str = [];
    str[0] = "Forbidden.";
    str[1] = "err"
    str[2] = "err..."
    str[3] = "stop it"
    str[4] = "u arent allowed"
    str[5] = "site_err"
    str[6] = "welcome to the internet void =)"

    alert(str[clicked]);

    if (clicked >= 6) {
        location.replace("secret.html");
    }

    clicked++;
}