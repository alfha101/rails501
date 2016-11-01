(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

var myInfo = [];

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var regCtrl = this;

  regCtrl.found = true;


  regCtrl.submit = function () {
    myInfo.firstname = regCtrl.firstname;
    myInfo.lastname = regCtrl.lastname;
    myInfo.email = regCtrl.email;
    myInfo.phone = regCtrl.phone;
    myInfo.short_name = regCtrl.short_name;
    myInfo.registered = true;

    if (myInfo.short_name != undefined) {

      MenuService.getMenuItem(myInfo.short_name).then(function(result) {
        regCtrl.menuItem =result.data;
        // console.log("signupcontroller regCtrl.resultdata:", result.data);

        if (regCtrl.menuItem != undefined) {
          MenuService.storeMyInfo(myInfo);
          regCtrl.found = true;
          regCtrl.saved = true;
        }

      }).catch(function(error) {
          regCtrl.found = false;
          regCtrl.saved = false;
        });
    }
  };

};

})();
