$("document").ready(function () {
  // gets link containers
  const navLinks = $(".link-container");

  // toggles active class presence on anchor links
  navLinks.click(function () {
    navLinks.removeClass("active");
    $(this).addClass("active");

    // moves indicator based on presence of respective class
    if ($(this)[0] === navLinks[0]) {
      $("li:eq(0)")
        .parent()
        .prev()
        .addClass("move-indicator-1")
        .removeClass("move-indicator-2")
        .removeClass("move-indicator-3")
        .removeClass("move-indicator-4")
        .removeClass("move-indicator-5");
    } else if ($(this)[0] === navLinks[1]) {
      $("li:eq(1)")
        .parent()
        .prev()
        .addClass("move-indicator-2")
        .removeClass("move-indicator-1")
        .removeClass("move-indicator-3")
        .removeClass("move-indicator-4")
        .removeClass("move-indicator-5");
    } else if ($(this)[0] === navLinks[2]) {
      $("li:eq(2)")
        .parent()
        .prev()
        .addClass("move-indicator-3")
        .removeClass("move-indicator-1")
        .removeClass("move-indicator-2")
        .removeClass("move-indicator-4")
        .removeClass("move-indicator-5");
    } else if ($(this)[0] === navLinks[3]) {
      $("li:eq(3)")
        .parent()
        .prev()
        .addClass("move-indicator-4")
        .removeClass("move-indicator-1")
        .removeClass("move-indicator-2")
        .removeClass("move-indicator-3")
        .removeClass("move-indicator-5");
    } else if ($(this)[0] === navLinks[4]) {
      $("li:eq(4)")
        .parent()
        .prev()
        .addClass("move-indicator-5")
        .removeClass("move-indicator-1")
        .removeClass("move-indicator-2")
        .removeClass("move-indicator-3")
        .removeClass("move-indicator-4");
    } else {
      console.log("ERROR!!!!");
    }
  });
});
