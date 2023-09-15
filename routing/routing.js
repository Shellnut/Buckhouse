// Routing
app.config(function($routeProvider) {
    $routeProvider
       .when("/:type1/:type2", {
          templateUrl : "views/location.html",
          controller: 'LocationController'
       })
       .otherwise({ redirectTo: '/country/unitedStates' });
 });
