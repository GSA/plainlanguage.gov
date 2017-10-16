import $ from 'jquery';
import Stickyfill from 'stickyfilljs';

var elements = $('.sticky');
Stickyfill.add(elements);

var navHeight = function () {
  var windowHeight = window.innerHeight;
  var mainContent = $('.usa-layout-docs-main_content')
  var sideNav = $('.usa-layout-docs-sidenav');

  if (sideNav.height() > windowHeight && mainContent.height() > windowHeight) {
    sideNav.css('height', (windowHeight));
  } else {
    sideNav.css('height', 'auto');
  }
};

navHeight();

$( window ).resize(function () {
  navHeight();
});
