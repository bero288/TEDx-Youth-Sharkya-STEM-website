let showButton = document.querySelectorAll(".video_show");

showButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    Swal.fire({
      title: "coming soon!",
      icon: "info",
      confirmButtonText: "ok",
    });
  });
});
