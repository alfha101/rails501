(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('APIBasePath', "//davids-restaurant.herokuapp.com")
  .component('foundItems', {
    templateUrl: 'foundItems.html',
    bindings: {
      items: '<',
      title: '@',
      onRemove: '&'
    }
  });

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var choice = this;
    choice.searchTerm = '';

    choice.narrow = function(searchTerm) {
      MenuSearchService.getMatchedMenuItems(searchTerm)
        .then(function (response) {
          choice.found = response;
          choice.title = (choice.found.length + " item(s) found");
          choice.filter = searchTerm;
        })
        .catch(function (error) {
         console.log("error in click function");
        });
    };

    choice.removeItem = function(itemIndex) {
      choice.found.splice(itemIndex, 1);
      console.log("item removed");
      choice.title = (choice.found.length + " item(s) found");
      console.log(choice.title);
    };
  }

  MenuSearchService.$inject = ['$http', 'APIBasePath'];
  function MenuSearchService($http, APIBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({method: "GET", url: (APIBasePath + "/menu_items.json")})
        .then(function (response) {
          // process the result and only keep items that match
          var allItems = response.data.menu_items;
          var foundItems = [];

          if (searchTerm.length == 0) {
              allItems = [];
          } else {
            for (var i = 0; i < allItems.length; i++) {
                var str = allItems[i].description;

                if (str.toLowerCase().indexOf(searchTerm) >= 0) {
                    foundItems.push(allItems[i]);
                }
            } //for
          }

          return foundItems;
        })
        .catch(function (error) {
                console.log("error in service method");
        });
    }; //service
  }
})();
