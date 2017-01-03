(function () {

  // This is referenced in app_client/common/services/airplaneData.service.html
  angular.module('endtimes', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/about/', {
        templateUrl: '/about/about.view.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
      .when('/download/', {
        templateUrl: '/download/download.view.html',
        controller: 'downloadCtrl',
        controllerAs: 'vm'
      })
      .when('/contact/', {
        templateUrl: '/contact/contact.view.html',
        controller: 'contactCtrl',
        controllerAs: 'vm'
      })
      /*.when('/donate/', {
        templateUrl: '/donate/donate.view.html',
        controller: 'donateCtrl',
        controllerAs: 'vm'
      })
      */
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('endtimes')
    .config(['$routeProvider', '$locationProvider', config]);

})();
