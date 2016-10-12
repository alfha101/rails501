
(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/templates/items-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
