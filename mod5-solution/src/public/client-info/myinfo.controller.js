(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService, ApiPath) {
    var infoCtrl = this;

    infoCtrl.basePath = ApiPath;
    infoCtrl.registered = false;
    infoCtrl.info = MenuService.getMyInfo();
    // console.log("myinfo.controller: short_name", infoCtrl.info.short_name);

    if (infoCtrl.info.registered == true){
      infoCtrl.registered = true;

      if (infoCtrl.info.short_name != undefined) {
        MenuService.getMenuItem(infoCtrl.info.short_name).then(function(result) {
        infoCtrl.menuItem = result.data;});
        infoCtrl.dish=true;
      }
      else {
        infoCtrl.dish=false;
      }
    }
  }

})();
