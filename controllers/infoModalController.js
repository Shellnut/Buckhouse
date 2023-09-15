// Info Modal Controller
app.controller('InfoModal', function($scope, $uibModalInstance) {
    // Close Modal
    $scope.ok = function () {
        $uibModalInstance.close();
    };
})
