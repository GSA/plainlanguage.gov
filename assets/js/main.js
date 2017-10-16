import $ from 'jquery';

var navHeight = function () {
  if ($('.usa-layout-docs-main_content').height() > window.innerHeight) {
    $('.usa-layout-docs-sidenav').css('height', (window.innerHeight));
  } else {
    $('.usa-layout-docs-sidenav').css('height', 'auto');
  }
};

navHeight();

$( window ).resize(function () {
  navHeight();
});
