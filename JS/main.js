let sidebar = document.querySelector(".sidebar");
let toggleArrow = document.querySelector(".sidebar .toggle-sidebar");
toggleArrow.addEventListener("click", () => {
  // sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    sidebar.classList.remove("close");
    localStorage.setItem("sidebarState", "open");
  } else {
    sidebar.classList.add("close");
    localStorage.setItem("sidebarState", "close");
  }
});
const savedSidebarState = localStorage.getItem("sidebarState");
if (savedSidebarState === "close") {
  sidebar.classList.add("close");
}
// Start Light And Dark Mode
let toggleMode = document.querySelector(".toggle-mode");
let themeLi = document.querySelector(".sidebar .theme");
themeLi.addEventListener("click", function () {
  if (document.body.getAttribute("data-theme") === "light") {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  addActive();
});

// Save Theme In localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
}

// Update the checkbox state based on the user's preference
function addActive() {
  if (document.body.getAttribute("data-theme") === "dark") {
    toggleMode.classList.add("active");
    localStorage.setItem("activeState", "active");
  } else {
    toggleMode.classList.remove("active");
    localStorage.setItem("activeState", "not-active");
  }
}
// Save Active State In localStorage
const savedActiveState = localStorage.getItem("activeState");
if (savedActiveState === "active") {
  toggleMode.classList.add("active");
}
