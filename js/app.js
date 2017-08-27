$(document).ready(() => {
  // Get script arguments
  var page_id = $("#my-script").attr("page-id");

  // Load components
  $("#blog-header").load("components/blog-header.html");
  $("#blog-sidebar").load("components/blog-sidebar.html");
  $("#footer").load("components/footer.html");
  $("#navbar").load("components/navbar.html", () => {

    // Make navbar tab on current page active
    var current_tab = $("#bs-example-navbar-collapse-1 li").eq(page_id);

    current_tab.addClass("active");
    current_tab.find("a").append("<span class=\"sr-only\">(current)</span>");
  });
});
