var drawertwentyfourclosed = new Boolean(true);
var drawertwentythreeclosed = new Boolean(true);
var drawertwentytwoclosed = new Boolean(true);

let hiddenfromdesktop__twentyfour = document.querySelectorAll(".painting-context__twentyfour:not(.desktop-preview__twentyfour)");
let hiddenfrommobile__twentyfour = document.querySelectorAll(".painting-context__twentyfour:not(.mobile-preview__twentyfour)");

const hiddenfromdesktop__twentythree = document.querySelectorAll(".painting-context__twentythree:not(.desktop-preview__twentythree)");
const hiddenfrommobile__twentythree = document.querySelectorAll(".painting-context__twentythree:not(.mobile-preview__twentythree)");

const hiddenfromdesktop__twentytwo = document.querySelectorAll(".painting-context__twentytwo:not(.desktop-preview__twentytwo)");
const hiddenfrommobile__twentytwo = document.querySelectorAll(".painting-context__twentytwo:not(.mobile-preview__twentytwo)");

function drawertwentyfour() {
    if (drawertwentyfourclosed == true) {
        hiddenfromdesktop__twentyfour.forEach(function (element) { 
            element.style.display = "initial";
        })
        document.getElementsByClassName("year__drawer_minus")[0].style.display = "initial";
        document.getElementsByClassName("year__drawer_plus")[0].style.display = "none";
        drawertwentyfourclosed = false;
    }
    else {
        hiddenfromdesktop__twentyfour.forEach(function (element) { 
            element.style.display = "none";
        })
        document.getElementsByClassName("desktop-preview__twentyfour")[0].style.display = "initial";
        document.getElementsByClassName("desktop-preview__twentyfour")[1].style.display = "initial";
        document.getElementsByClassName("desktop-preview__twentyfour")[2].style.display = "initial";
        document.getElementsByClassName("mobile-preview__twentyfour")[0].style.display = "initial";
        document.getElementsByClassName("year__drawer_minus")[0].style.display = "none";
        document.getElementsByClassName("year__drawer_plus")[0].style.display = "initial";
        drawertwentyfourclosed = true;
    }
}

function drawertwentythree() {
    if (drawertwentythreeclosed == true) {
        hiddenfromdesktop__twentythree.forEach(function (element) { 
            element.style.display = "initial";
        })
        document.getElementsByClassName("year__drawer_minus")[1].style.display = "initial"
        document.getElementsByClassName("year__drawer_plus")[1].style.display = "none"
        drawertwentythreeclosed = false
    }
    else {
        hiddenfromdesktop__twentythree.forEach(function (element) { 
            element.style.display = "none";
        })
        document.getElementsByClassName("desktop-preview__twentythree")[0].style.display = "initial"
        document.getElementsByClassName("desktop-preview__twentythree")[1].style.display = "initial"
        document.getElementsByClassName("desktop-preview__twentythree")[2].style.display = "initial"
        document.getElementsByClassName("mobile-preview__twentythree")[0].style.display = "initial"
        document.getElementsByClassName("year__drawer_minus")[1].style.display = "none"
        document.getElementsByClassName("year__drawer_plus")[1].style.display = "initial"
        drawertwentythreeclosed = true
    }
}

function drawertwentytwo() {
    if (drawertwentytwoclosed == true) {
        hiddenfromdesktop__twentytwo.forEach(function (element) { 
            element.style.display = "initial";
        })
        document.getElementsByClassName("year__drawer_minus")[2].style.display = "initial"
        document.getElementsByClassName("year__drawer_plus")[2].style.display = "none"
        drawertwentytwoclosed = false
    }
    else {
        hiddenfromdesktop__twentytwo.forEach(function (element) { 
            element.style.display = "none";
        })
        document.getElementsByClassName("desktop-preview__twentytwo")[0].style.display = "initial"
        document.getElementsByClassName("desktop-preview__twentytwo")[1].style.display = "initial"
        document.getElementsByClassName("desktop-preview__twentytwo")[2].style.display = "initial"
        document.getElementsByClassName("mobile-preview__twentytwo")[0].style.display = "initial"
        document.getElementsByClassName("year__drawer_minus")[2].style.display = "none"
        document.getElementsByClassName("year__drawer_plus")[2].style.display = "initial"
        drawertwentytwoclosed = true
    }
}