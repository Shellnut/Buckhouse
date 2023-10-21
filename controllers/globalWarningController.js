// Modal controller      
app.controller('GlobalWarningModal', function ($scope, $uibModalInstance) {
    // Continue Modal
    $scope.continue = function () {
        $uibModalInstance.close();
    };
    // Cancel Modal
    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
});
