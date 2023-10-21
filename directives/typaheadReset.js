app.directive('resetTypeahead', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        element.bind('click', function (e) {
          var viewValue = ngModel.$viewValue;
          if (viewValue) {
            ngModel.$setViewValue('');
            ngModel.$render();
          }
        });
      }
    }
  })
