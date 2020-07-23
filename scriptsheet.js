
function openNav()  {
  if (setMobile()) {
    document.getElementById("mobile").style.animation = "fade-in .5s forwards";
  } else {
    document.getElementById("desktop").style.animation = "slide-out .5s forwards";
    document.getElementById("body").style.filter = "opacity(95%)";
  }
}

function closeNav() {
  if (setMobile())  {
    document.getElementById("mobile").style.animation = "fade-out .5s forwards";
    document.getElementById("body").style.filter = "none";
  } else {
    document.getElementById("desktop").style.animation = "slide-in .5s forwards";
    document.getElementById("body").style.filter = "none";
  }
}

function setMobile()  {
  var intElementClientWidth = document.documentElement.clientWidth;
  if (intElementClientWidth < 600)  {
    try {
      document.getElementById("desktop").id = "mobile";
    } catch (e) {
        //pass
    }
    return true;
  } else {
    try {
      document.getElementById("mobile").id = "desktop";
    } catch (e) {
      //pass
    }
    return false;
  }
}
