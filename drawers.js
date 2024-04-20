var drawertwentyfourclosed = new Boolean(true);
var drawertwentythreeclosed = new Boolean(true);
var drawertwentytwoclosed = new Boolean(true);

let hiddenfromdesktop__twentyfour = document.querySelectorAll(
  ".painting-context__twentyfour:not(.desktop-preview__twentyfour)"
);
let hiddenfrommobile__twentyfour = document.querySelectorAll(
  ".painting-context__twentyfour:not(.mobile-preview__twentyfour)"
);

const hiddenfromdesktop__twentythree = document.querySelectorAll(
  ".painting-context__twentythree:not(.desktop-preview__twentythree)"
);
const hiddenfrommobile__twentythree = document.querySelectorAll(
  ".painting-context__twentythree:not(.mobile-preview__twentythree)"
);

const hiddenfromdesktop__twentytwo = document.querySelectorAll(
  ".painting-context__twentytwo:not(.desktop-preview__twentytwo)"
);
const hiddenfrommobile__twentytwo = document.querySelectorAll(
  ".painting-context__twentytwo:not(.mobile-preview__twentytwo)"
);

var mobilescreen = window.matchMedia("(max-width: 755px)");

function drawertwentyfour() {
  if (drawertwentyfourclosed == true) {
    document.getElementsByClassName("year__drawer_minus")[0].style.display =
      "initial";
    document.getElementsByClassName("year__drawer_plus")[0].style.display =
      "none";
    if (mobilescreen.matches) {
      hiddenfrommobile__twentyfour.forEach(function (element) {
        element.style.display = "initial";
      });
    } else {
      hiddenfromdesktop__twentyfour.forEach(function (element) {
        element.style.display = "initial";
      });
    }
    drawertwentyfourclosed = false;
  } else {
    document.getElementsByClassName("year__drawer_minus")[0].style.display =
      "none";
    document.getElementsByClassName("year__drawer_plus")[0].style.display =
      "initial";
    if (mobilescreen.matches) {
      hiddenfrommobile__twentyfour.forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementsByClassName(
        "mobile-preview__twentyfour"
      )[0].style.display = "initial";
    } else {
      hiddenfromdesktop__twentyfour.forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementsByClassName(
        "desktop-preview__twentyfour"
      )[0].style.display = "initial";
      document.getElementsByClassName(
        "desktop-preview__twentyfour"
      )[1].style.display = "initial";
      document.getElementsByClassName(
        "desktop-preview__twentyfour"
      )[2].style.display = "initial";
    }
    drawertwentyfourclosed = true;
  }
}

function drawertwentythree() {
  if (drawertwentythreeclosed == true) {
    document.getElementsByClassName("year__drawer_minus")[0].style.display =
      "initial";
    document.getElementsByClassName("year__drawer_plus")[0].style.display =
      "none";
    if (mobilescreen.matches) {
      hiddenfrommobile__twentythree.forEach(function (element) {
        element.style.display = "initial";
      });
    } else {
      hiddenfromdesktop__twentythree.forEach(function (element) {
        element.style.display = "initial";
      });
    }
    drawertwentythreeclosed = false;
  } else {
    document.getElementsByClassName("year__drawer_minus")[0].style.display =
      "none";
    document.getElementsByClassName("year__drawer_plus")[0].style.display =
      "initial";
    if (mobilescreen.matches) {
      hiddenfrommobile__twentythree.forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementsByClassName(
        "mobile-preview__twentythree"
      )[0].style.display = "initial";
    } else {
      hiddenfromdesktop__twentythree.forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementsByClassName(
        "desktop-preview__twentythree"
      )[0].style.display = "initial";
      document.getElementsByClassName(
        "desktop-preview__twentythree"
      )[1].style.display = "initial";
      document.getElementsByClassName(
        "desktop-preview__twentythree"
      )[2].style.display = "initial";
    }
    drawertwentythreeclosed = true;
  }
}

function drawertwentytwo() {
  if (drawertwentytwoclosed == true) {
    document.getElementsByClassName("year__drawer_minus")[0].style.display =
      "initial";
    document.getElementsByClassName("year__drawer_plus")[0].style.display =
      "none";
    if (mobilescreen.matches) {
      hiddenfrommobile__twentytwo.forEach(function (element) {
        element.style.display = "initial";
      });
    } else {
      hiddenfromdesktop__twentytwo.forEach(function (element) {
        element.style.display = "initial";
      });
    }
    drawertwentytwoclosed = false;
  } else {
    document.getElementsByClassName("year__drawer_minus")[0].style.display =
      "none";
    document.getElementsByClassName("year__drawer_plus")[0].style.display =
      "initial";
    if (mobilescreen.matches) {
      hiddenfrommobile__twentytwo.forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementsByClassName(
        "mobile-preview__twentytwo"
      )[0].style.display = "initial";
    } else {
      hiddenfromdesktop__twentytwo.forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementsByClassName(
        "desktop-preview__twentytwo"
      )[0].style.display = "initial";
      document.getElementsByClassName(
        "desktop-preview__twentytwo"
      )[1].style.display = "initial";
      document.getElementsByClassName(
        "desktop-preview__twentytwo"
      )[2].style.display = "initial";
    }
    drawertwentytwoclosed = true;
  }
}
