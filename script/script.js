$( document ).ready(function() {
  let interval;

  function gallery(){
    interval = setInterval(function(){
      let first = $('.slider ul li:first-child');
      first.animate({ 'margin-left': '-1900px' }, 1200, function() {
          first.remove().css({ 'margin-left': '0px' });
          $('.slider ul li:last-child').after(first);
      });
    }, 4000);
  };
  gallery();


  $(".next").click(function(){
    clearInterval(interval);
    let first = $('.slider ul li:first-child');
    first.animate({ 'margin-left': '-1900px' }, 1200, function() {
        first.remove().css({ 'margin-left': '0px' });
        $('.slider ul li:last-child').after(first);
    });
    gallery();
  });

  $(".prev").click(function(){
    clearInterval(interval);
    let last = $('.slider ul li:last-child');
    last.remove().css({ 'margin-left': '-1900px' });
    $('.slider ul li:first-child').before(last);
    last.animate({ 'margin-left': '0px' }, 1200);
    gallery();
  });
});