$(document).ready(() => {
  // Show tab specified by URL href (if it exists)
  var url = $(location).attr('href');
  var href_loc = url.lastIndexOf('#');

  if (href_loc != -1) {
    var href = url.substr(href_loc);

    $('#myTab a[href="'.concat(href, '"]')).tab('show');
  }
});
