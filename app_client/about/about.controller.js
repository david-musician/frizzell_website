(function() {

  angular
    .module('endtimes')
    .controller('aboutCtrl', aboutCtrl);

  aboutCtrl.$inject = ['$scope'];

  function aboutCtrl($scope) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    // vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    
    vm.me = "about";
  }
})();