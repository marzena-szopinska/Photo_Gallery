lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'positionFromTop': 80
});

function changeLightbox(media) {
  // If media query matches (769px)
  if (media.matches) {
    // chenge the lightbox width and possition it lower
    lightbox.option({
      'maxWidth': 800,
      'positionFromTop': 100
    });
  } else {
    // do nothing
  }
}
// Store the media query in the media variable
const media = window.matchMedia("(min-width: 768px)");
// Call listener function at run time
changeLightbox(media);
// Attach listener function on state changes
media.addListener(changeLightbox);

// SEARCH BOX
$(document).ready(function(){
    $('#search').on('keyup', function(){
    const $value = $(this).val().toLowerCase();
    const $linksNum = $('a').length;
    for(let i= 0; i < $linksNum; i++){
      let $link = $('a').eq(i);
      let $title = $link.attr("data-title");
      if($title.indexOf($value) > -1){
        $link.css("display", "");
      }else
      {
        $link.css("display", "none");
      }
    }
  });
});
