
$(".img").wrap('<div class="alt-wrap"/>');
$(".img").find('img:first').wrap('<div class="alt-wrap"/>');

$(".img").find('img:first').each(function() {
  $(this).parent().after('<p class="alt">' + $(this).attr('alt') + '</p>');
})