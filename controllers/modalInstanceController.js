// Modal controller      
app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $http, modalData, modalType) {

    $scope.modalData = modalData;
    $scope.totalItems = modalData.videos.length;
    $scope.currentPage = 1;

    if (modalType === 'videos') {
        $scope.active = 0;
    }
    else if (modalType === 'resortReview') {
        $scope.active = 1;
    }
    else if (modalType === 'map') {
        $scope.active = 2;
    }
    // If there are no videos
    if (modalData.videos.length === 0 && modalData.mapLink) {
        $scope.active = 2;
    }

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
        url: `https://api.openskimap.org/features/${modalData.geoId}.geojson`,
    }).then(function success(response) {
        console.log('response is', response);
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
