const toggler = document.querySelector(".checkbox");
const togglerBall = document.querySelector(".ball");
let darkMode = localStorage.getItem("darkMode");
let enableDarkMode = () => {
  //get the body and add the dark class on it
  document.querySelector("body").classList.add("dark");
  //add the enabled class on the toggler to make it move
  togglerBall.classList.add("enabled");
  //change in the localstorage
  localStorage.setItem("darkMode", "enabled");
};
let disableDarkMode = () => {
  //get the body and add the dark class on it
  document.querySelector("body").classList.remove("dark");
  //add the enabled class on the toggler to make it move
  togglerBall.classList.remove("enabled");
  //change in the localstorage
  localStorage.setItem("darkMode", null);
};
//check the dark mode in the localstorage when the page load
if (darkMode === "enabled") {
  enableDarkMode();
}
//toggle the dark mode on clicking the toggler
toggler.addEventListener("change", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    //give an alert
    Swal.fire({
      text: "Dark Mode Is Enabled Successfully",
      icon: "success",
      confirmButtonText: "ok",
    });
  } else {
    disableDarkMode();
  }
});
