// Modal controller      
app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $http, modalData) {

    $scope.modalData = modalData;

    // Changing starts out of 5 because out of 10 is too cluttered. Can't divide by 2 in mg-model. 
    $scope.price = modalData.resortReview.price/2;
    $scope.easeOfAccess = modalData.resortReview.easeOfAccess/2;
    $scope.lodging = modalData.resortReview.lodging/2;
    $scope.chairLifts = modalData.resortReview.chairLifts/2;
    $scope.runs = modalData.resortReview.runs/2;
    $scope.terrainPark = modalData.resortReview.terrainPark/2;
    $scope.food = modalData.resortReview.food/2;
    $scope.employees = modalData.resortReview.employees/2;
    $scope.views = modalData.resortReview.views/2;
    $scope.fun = modalData.resortReview.fun/2;
    $scope.parking = modalData.resortReview.parking/2;
    $scope.wouldIGoBack = modalData.resortReview.wouldIGoBack/2;

    // Get data from skimap API
    $http({
        method: 'GET',
        url: `https://skimap.org/SkiAreas/view/${modalData.id}.json`,
    }).then(function success(response) {
        $scope.modalResortData = response;
    }, function error(response) {
        // this function will be called when the request returned error status
        console.log(`I'm sorry. Something went wrong`, response);            
    });

    // Close Modal
    $scope.ok = function () {
        $uibModalInstance.close();
    };
});
