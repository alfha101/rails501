(function () {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Sugary Drinks",
    quantity: "4"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Pepto-Bismol",
    quantity: "3"
  }
];

var boughtList = [];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.shoppingList = shoppingList;


  // toBuy.addItem = function () {
  //   ShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
  // }

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }

}

// LIST #2 - controller
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;
  bought.boughtList = boughtList;

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of toBuy items
  var items1 = shoppingList;

  // List of bought items
  var items2 = boughtList;

  // service.addItem = function (itemName, quantity) {
  //   var item = {
  //     name: itemName,
  //     quantity: quantity
  //   };
  //   items1.push(item);
  // };

  service.removeItem = function (itemIndex) {
    var item = {
      name: shoppingList[itemIndex].name,
      quantity: shoppingList[itemIndex].quantity
    };
    console.log(shoppingList[itemIndex].name);
    items1.splice(itemIndex, 1);
    items2.push(item);
    console.log(boughtList[0].name, boughtList[0].quantity);
  };

}

})();
