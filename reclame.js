var hidden = new Boolean(true);

function reclame() {
    if (hidden == true) {
        document.getElementById("reclame").style.display = "initial";
        document.getElementById("knop").style.display = "none";
        hidden = false
    }
    else {
        document.getElementById("reclame").style.display = "none";
        document.getElementById("knop").style.display= "initial";
        hidden = true
    }
}