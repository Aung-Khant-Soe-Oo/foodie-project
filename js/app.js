let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scrollToTop");
let headerControl = new Waypoint({
   element: document.getElementById("about"),
   handler: function (direction) {
      if (direction == "down") {
         header.classList.add("shadow");
         header.classList.add("animate__slideInDown");
         scrollToTop.style.display = "block";
         scrollToTop.classList.add("animate__slideInUp");
      } else {
         header.classList.remove("shadow");
         header.classList.remove("animate__slideInDown");
         scrollToTop.style.display = "none";
         scrollToTop.classList.remove("animate__slideInUp");
      }
   },
   offset: "90%",
});
ScrollReveal({
   origin: "top",
   distance: "50px",
   duration: 1300,
   reset: true,
}).reveal(".content", {
   interval: 800,
});
