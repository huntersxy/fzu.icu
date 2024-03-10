$(document).ready(function() {
  $('#scroll-container').on('scroll', function() {
      if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          $('#scroll-content').hide();
      } else {
          $('#scroll-content').show();
      }
  });
});