import $ from 'jquery';
import Stickyfill from 'stickyfilljs';

var elements = document.getElementsByClassName('sticky');
Stickyfill.add(elements);

var navHeight = function () {
  $('.usa-layout-docs-sidenav').css('height', $('.usa-layout-docs-sidenav').height());
};

navHeight();
