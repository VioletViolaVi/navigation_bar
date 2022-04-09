$("document").ready(function () {
  // gets link containers
  const navLinks = $(".link-container");

  // toggles active class presence on anchor links
  navLinks.click(function () {
    navLinks.removeClass("active");
    $(this).addClass("active");
  });
});

/* JS only (longer) :
    document.addEventListener("DOMContentLoaded", function () {
    // gets link containers
    const link = document.querySelectorAll(".link-container");

    // toggles w/ active class selector
    function activatedLink() {
        link.forEach((singleItem) => {
        singleItem.classList.remove("active");
        this.classList.add("active");
        console.log(link);
        });
    }

    // applies func to each link when clicked
    link.forEach((singleItem) => {
        singleItem.addEventListener("click", activatedLink);
    });
});
*/
