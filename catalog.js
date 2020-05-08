'use strict';

// var select = document.querySelector('.filter-fieldset__roll');
var selectTitle = document.querySelectorAll('.filter-fieldset__roll-title');
var selectLabel = document.querySelectorAll('.filter-fieldset__roll-label');

// Toggle menu
/* selectTitle.addEventListener('click', function () {
  if ('active' === select.getAttribute('data-state')) {
    select.setAttribute('data-state', '');
  } else {
    select.setAttribute('data-state', 'active');
  }
}); */

// Close when click to option
for (var i = 0; i < selectLabel.length; i++) {
    selectLabel[i].addEventListener('click', function (evt) {
      var select = document.querySelector('.filter-fieldset__roll');
        selectTitle.textContent = evt.target.textContent;
        select.setAttribute('data-state', '');
  });
}

for (var i = 0; i < selectTitle.length; i++) {
  selectTitle[i].addEventListener('click', function () {
    var select = document.querySelector('.filter-fieldset__roll');
    if ('active' === select.getAttribute('data-state')) {
      select.setAttribute('data-state', '');
    } else {
      select.setAttribute('data-state', 'active');
    }
  });
}