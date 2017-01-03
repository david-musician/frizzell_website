(function () {

  angular
    .module('endtimes')
    .directive('siteNav', siteNav);

  function siteNav () {
    return {
      restrict: 'EA',
      scope: {
        price : '=',
      },      
      templateUrl: '/common/directives/siteNav/siteNav.template.html'
    };
  }
})();
