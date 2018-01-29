var app = angular.module("app", []);

app.controller('mainController', function($scope) {

  $scope.searchProducts = function (str) {
    var products = fetchProductsFromDb();
    var filteredProducts = [];
    products.forEach(function(product) {
      if(str !== "" && product.name.toLowerCase().includes(str.toLowerCase())) {
        filteredProducts.push(product);
      }
    });
    $scope.availableProducts = filteredProducts;
  };

  $scope.showAllProducts = function () {
    $scope.productSearchModel = "";
    $scope.availableProducts = fetchProductsFromDb();
  };


  $scope.basket = [];
  $scope.addToBasket = function(item) {

    if(findIndex($scope.basket, item) !== undefined) {
      item.quantity++;
      return;
    }

    item.quantity = 1;
    $scope.basket.push(item);
  };

  $scope.removeFromBasket = function(item) {
    if(item.quantity > 1) {
      item.quantity--;
      return;
    }
      var index = findIndex($scope.basket, item);
      $scope.basket.splice(index, 1);
  };

});

function findIndex(arr, item) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return i;
    }
  }
}

function fetchProductsFromDb() {
  //TODO: implement actual DB
  var products = [
    {
      id: 1,
      name: "Cat Scratcher",
      price: 150,
      description: "Eeeerrr.. do you really need a description? Can't you read?"
    },
    {
      id: 2,
      name: "Burrito Handle",
      price: 15,
      description: "Honestly, I have no idea what this is..."
    },
    {
      id: 3,
      name: "Broom",
      price: 5,
      description: "Used for floor sweeping"
    },
    {
      id: 4,
      name: "Staff of Amfilohije",
      price: 200,
      description: "A single tap on the head is enough to permanently stupefy any individual"
    },
    {
      id: 5,
      name: "Paper Weight",
      price: 3,
      description: "Holds your papers down"
    },
    {
      id: 6,
      name: "Bell",
      price: 4,
      description: "Ring-a-ding!"
    },
    {
      id: 7,
      name: "Mutant",
      price: 2000,
      description: "Could be anything really..."
    },
    {
      id: 8,
      name: "Sword",
      price: 300,
      description: "Pod mac, bato!"
    },
    {
      id: 9,
      name: "Scrum Master",
      price: 25000,
      description: "Guaranteed to get your kanban board sorted out in no time!"
    }

  ];
  return products;
}

