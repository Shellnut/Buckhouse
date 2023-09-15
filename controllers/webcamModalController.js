// Webcam Modal Controller
app.controller('WebcamModal', function($scope, $uibModalInstance) {
    // Close Modal
    $scope.ok = function () {
        $uibModalInstance.close();
    };
});
