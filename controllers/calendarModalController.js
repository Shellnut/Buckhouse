// Calendar Modal Controller
app.controller('CalendarModal', function($scope, $uibModalInstance) {
    // Close Modal
    $scope.ok = function () {
        $uibModalInstance.close();
    };
});
