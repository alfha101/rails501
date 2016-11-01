(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$filter'];
function MenuService($http, ApiPath, $filter) {
  var service = this;

  var myInfo=[];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (short_name) {

            short_name = $filter('uppercase')(short_name);

    return $http.get(ApiPath + '/menu_items/'+ short_name +'.json').then(function (response) {
      return response;
    });
  };

  service.storeMyInfo = function (info) {

    myInfo = info;
    // console.log("MenuService storeMyInfo lastname and short_name:", info.lastname, info.short_name);
  };

  service.getMyInfo = function () {
    return myInfo;
  };

}

})();
