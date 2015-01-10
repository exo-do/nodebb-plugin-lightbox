/*Spoiler jQuery Javascript */
$.fn.ready(function() {
  // Spoiler
  $(document).on('click', '.spoiler-btn', function (e) {
    e.preventDefault()
    $(this).parent().children('.spoiler-body').collapse('toggle')
  });
});
