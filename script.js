$(document).ready(function() {
  $('button').on('click', function() {
    $('button').siblings('.hide').show();
    $('button').addClass('hide');
  });
});
