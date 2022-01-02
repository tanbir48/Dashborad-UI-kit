function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const hamburger = document.getElementById("mobile-button");
var navmenu = document.getElementById("my-task");

hamburger.addEventListener("click", () => {
  navmenu.style.left = "0%";
  navmenu.style.transition = "0.5s";
});

const hamburgercross = document.getElementById("mobile-cross-button");
var navmenu = document.getElementById("my-task");

hamburgercross.addEventListener("click", () => {
  navmenu.style.left = "-50%";
  navmenu.style.transition = "0.5s";
});
