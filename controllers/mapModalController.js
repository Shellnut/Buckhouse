// Map Modal controller      
app.controller('MapModal', function ($scope, $uibModalInstance, modalData) {
    $scope.modalData = modalData;
    // Close Modal
    $scope.ok = function () {
        $uibModalInstance.close();
    };
});
