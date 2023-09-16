// Governing app controller
app.controller('myCtrl', function($scope, $uibModal, myUtilities, Data) {

    $scope.Data = Data;


    $scope.updateMarker = function() {
        console.log('update marker!', $scope.Data.marker);
        localStorage.setItem('plainMarker', $scope.Data.marker ? 1 : '');
    }

    // Scroll to change log
    $scope.goToChangeLog = function() {
        document.getElementById("change-log").scrollIntoView(); 
    }

    // Custom sort for table
    $scope.myOrder = function(field) {
        // Sort the resort review score by excluding the N/A's
        if (field === 'resortReview.score' && !$scope.reverseSort) {
            $scope.allData.map(val=> {
                if (!val.resortReview.score) {
                val.resortReview.score = 0;
                }
                return val;
            })
        }
        // Reset resort review score for proper sorting
        else {
            $scope.allData.map(val=> {
                if (!val.resortReview.score) {
                val.resortReview.score = '';
                }
                return val;
            })
        }
        // Set the order by field for the table
        $scope.orderByField = field;
    }

    $scope.selected = undefined;
    $scope.statesWithFlags = myUtilities.countriesWithFlags;


    // MODAL!!!!
    $scope.animationsEnabled = true;
    $scope.openModal = function (modalData) {

        $scope.modalData = modalData;

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            template: `<div class="modal-header">
                            <h3 class="modal-title">
                            <div class="row">
                                <div class="col-xs-11">
                                    <a href="${modalData.website}" target="_blank" title="Resort Website">${modalData.resortName}, ${modalData.state}</a>
                                </div>
                                <div class="col-xs-1">
                                    <button class="btn btn-sm" style="float:right; clear:all;" ng-click="ok()">X</button>
                                </div>
                            </div>
                        
                            </h3>
                        </div>
                        <div class="modal-body">
                            <div ng-show="${!!modalData.resortReview.link}">
                            <h4>Johnathan's Resort Review</h4>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${modalData.resortReview.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <br>
                            <h4>Johnathan's Score</h4>
                            <dl class="dl-horizontal">
                                <dt>Overall Score:</dt>
                                <dd>${modalData.resortReview.score}/100</dd>
                                <dt ng-show="${!!modalData.resortReview.note}">Note:</dt>
                                <dd ng-show="${!!modalData.resortReview.note}">${modalData.resortReview.note}</dd>
                                <dt ng-show="${!!modalData.resortReview.price}">Price:</dt>
                                <dd ng-show="${!!modalData.resortReview.price}"><uib-rating ng-model="price" max="5"></uib-rating> (${modalData.resortReview.price}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.easeOfAccess}">Ease Of Access:</dt>
                                <dd ng-show="${!!modalData.resortReview.easeOfAccess}"><uib-rating ng-model="easeOfAccess" max="5"></uib-rating> (${modalData.resortReview.easeOfAccess}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.lodging}">Lodging:</dt>
                                <dd ng-show="${!!modalData.resortReview.lodging}"><uib-rating ng-model="lodging" max="5"></uib-rating> (${modalData.resortReview.lodging}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.chairLifts}">Chair Lifts:</dt>
                                <dd ng-show="${!!modalData.resortReview.chairLifts}"><uib-rating ng-model="chairLifts" max="5"></uib-rating> (${modalData.resortReview.chairLifts}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.runs}">Runs:</dt>
                                <dd ng-show="${!!modalData.resortReview.runs}"><uib-rating ng-model="runs" max="5"></uib-rating> (${modalData.resortReview.runs}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.terrainPark}">Terrain Park:</dt>
                                <dd ng-show="${!!modalData.resortReview.terrainPark}"><uib-rating ng-model="terrainPark" max="5"></uib-rating> (${modalData.resortReview.terrainPark}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.food}">Food:</dt>
                                <dd ng-show="${!!modalData.resortReview.food}"><uib-rating ng-model="food" max="5"></uib-rating> (${modalData.resortReview.food}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.employees}">Employees:</dt>
                                <dd ng-show="${!!modalData.resortReview.employees}"><uib-rating ng-model="employees" max="5"></uib-rating> (${modalData.resortReview.employees}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.views}">Views:</dt>
                                <dd ng-show="${!!modalData.resortReview.views}"><uib-rating ng-model="views" max="5"></uib-rating> (${modalData.resortReview.views}/10)</dd>
                                                                    
                                <dt ng-show="${!!modalData.resortReview.fun}">Fun:</dt>
                                <dd ng-show="${!!modalData.resortReview.fun}"><uib-rating ng-model="fun" max="5"></uib-rating> (${modalData.resortReview.fun}/10)</dd>
                                                                    
                                <dt ng-show="${!!modalData.resortReview.parking}">Parking:</dt>
                                <dd ng-show="${!!modalData.resortReview.parking}"><uib-rating ng-model="parking" max="5"></uib-rating> (${modalData.resortReview.parking}/10)</dd>
                                
                                <dt ng-show="${!!modalData.resortReview.wouldIGoBack}">Would I Go Back:</dt>
                                <dd ng-show="${!!modalData.resortReview.wouldIGoBack}"><uib-rating ng-model="wouldIGoBack" max="5"></uib-rating> (${modalData.resortReview.wouldIGoBack}/10)</dd>
                            </dl>
                            </div>
                            <h4>Ski Resort Infomation</h4>
                            <dl class="dl-horizontal">
                            <dt ng-show=${!!modalData.website}>Official Website:</dt>
                            <dd ng-show=${!!modalData.website}><a href="${modalData.website}" target="_blank" title="Resort Website">${modalData.website}</a><dd>
                            <dt ng-show="!!modalResortData.data.annual_snowfall && modalResortData.data.annual_snowfall!='Unknown'">Annual Snowfall:</dt> 
                            <dd ng-show="!!modalResortData.data.annual_snowfall && modalResortData.data.annual_snowfall!='Unknown'">{{modalResortData.data.annual_snowfall*0.393701 | number:0}}in</dd>
                            <dt ng-show="!!modalResortData.data.bottom_elevation && modalResortData.data.bottom_elevation!='Unknown'">Bottom Elevation:</dt>
                            <dd ng-show="!!modalResortData.data.bottom_elevation && modalResortData.data.bottom_elevation!='Unknown'">{{modalResortData.data.bottom_elevation*3.28084 | number:0}}ft</li></dd>
                            <dt ng-show="!!modalResortData.data.hourly_lift_capacity && modalResortData.data.hourly_lift_capacity!='Unknown'">Hourly Lift Capacity:</dt>
                            <dd ng-show="!!modalResortData.data.hourly_lift_capacity && modalResortData.data.hourly_lift_capacity!='Unknown'">{{modalResortData.data.hourly_lift_capacity | number}}</li></dd>
                            <dt ng-show="!!modalResortData.data.lift_count && modalResortData.data.lift_count!='Unknown'">Lift Count:</dt>
                            <dd ng-show="!!modalResortData.data.lift_count && modalResortData.data.lift_count!='Unknown'">{{modalResortData.data.lift_count | number}}</li></dd>
                            <dt ng-show="!!modalResortData.data.longest_run && modalResortData.data.longest_run!='Unknown'">Longest Run:</dt>
                            <dd ng-show="!!modalResortData.data.longest_run && modalResortData.data.longest_run!='Unknown'">{{modalResortData.data.longest_run*3.28084 | number:0}}ft</li></dd>
                            <dt ng-show="!!modalResortData.data.night_skiing && modalResortData.data.night_skiing!='Unknown'">Night Skiing:</dt>
                            <dd ng-show="!!modalResortData.data.night_skiing && modalResortData.data.night_skiing!='Unknown'">{{modalResortData.data.night_skiing}}</li></dd>
                            <dt ng-show="!!modalResortData.data.opening_year && modalResortData.data.opening_year!='Unknown'">Opening Year:</dt>
                            <dd ng-show="!!modalResortData.data.opening_year && modalResortData.data.opening_year!='Unknown'">{{modalResortData.data.opening_year}}</li></dd>
                            <dt ng-show="!!modalResortData.data.owner && modalResortData.data.owner!='Unknown'">Owner:</dt>
                            <dd ng-show="!!modalResortData.data.owner && modalResortData.data.owner!='Unknown'">{{modalResortData.data.owner}}</li></dd>
                            <dt ng-show="!!modalResortData.data.run_count && modalResortData.data.run_count!='Unknown'">Run Count:</dt>
                            <dd ng-show="!!modalResortData.data.run_count && modalResortData.data.run_count!='Unknown'">{{modalResortData.data.run_count | number}}</li></dd>
                            <dt ng-show="!!modalResortData.data.skiable_acreage && modalResortData.data.skiable_acreage!='Unknown'">Skiable Acreage:</dt>
                            <dd ng-show="!!modalResortData.data.skiable_acreage && modalResortData.data.skiable_acreage!='Unknown'">{{modalResortData.data.skiable_acreage | number}} acres</li></dd>
                            <dt ng-show="!!modalResortData.data.terrain_park && modalResortData.data.terrain_park!='Unknown'">Terrain Park:</dt>
                            <dd ng-show="!!modalResortData.data.terrain_park && modalResortData.data.terrain_park!='Unknown'">{{modalResortData.data.terrain_park}}</li></dd>
                            <dt ng-show="!!modalResortData.data.top_elevation && modalResortData.data.top_elevation!='Unknown'">Top Elevation:</dt>
                            <dd ng-show="!!modalResortData.data.top_elevation && modalResortData.data.top_elevation!='Unknown'">{{modalResortData.data.top_elevation*3.28084 | number:0}}ft</li></dd>
                            </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">Close</button>
                        </div>`,
            controller: 'ModalInstanceCtrl',
            resolve: {
                modalData: function () {
                    return $scope.modalData;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            // console.log('modal closed');
        });
    };

    $scope.infoModal = function() {
        var infoModal = $uibModal.open({
                animation: $scope.animationsEnabled,
                template: `<div class="modal-header">
                            <h3 class="modal-title">
                                <div class="row">
                                    <div class="col-xs-11">
                                        <span><i class="fa fa-info-circle" aria-hidden="true"></i> Information</span>
                                    </div>
                                    <div class="col-xs-1">
                                        <button class="btn btn-sm" style="float:right; clear:all;" ng-click="ok()">X</button>
                                    </div>
                                </div>
                            </h3>
                            </div>
                            <div class="modal-body">
                            <p><b>Who is Johnathan Buckhouse?</b></p>
                            <p><a href="https://www.youtube.com/c/JohnathanBuckhouse" target="_blank">Johnathan Buckhouse</a> is a Colorado based professional YouTuber/Snowboarder trying to visit, film a vlog and film a resort review at every ski resort in the U.S.</p>
                            <br>
                            <p><b>What is the Buckhouse Ski Map?</b></p>
                            <p>This website is a resource for learning more about ski resorts (big or small) through Johnathan's vlogs, trick breakdowns as well as resort reviews.</p>
                            <br>  
                            <p><b>How do I get my name on the map?</b></p>
                            <p>See Johnathan's <a href="https://www.youtube.com/channel/UC_i8SQjQOrPUpD3tpjMEuAw/join" target="_blank">YouTube Membership</a> page of level DREAMER for more information.</p>
                            <br>
                            <p><b>What do the colors on the map mean?</b></p>
                            <ul class="list-unstyled">
                                <li>
                                    <img src="img/snowboard_marker/visited.png" alt="plain marker" width="12" height="20"> Johnathan has visited this location.
                                </li>
                                <li>
                                    <img src="img/snowboard_marker/not_visited.png" alt="plain marker" width="12" height="20"> Johnathan has not visited this location yet! Check back soon.
                                </li>
                                <li>
                                    <img src="img/snowboard_marker/unofficial.png" alt="plain marker" width="12" height="20"> Johnathan has visited this location but it's not an official ski resort.
                                </li>
                            </ul>
                            <br>                                                                 
                            <p><b>What is the goal of this website?</b></p>
                            <p>The goal of this website is to become the most comprehensive U.S. ski resort database on the internet.</p>
                            <br>
                            <p><b>How can I support this goal?</b></p>
                            <p>You can support Johnathan by joining his <a href="https://www.youtube.com/channel/UC_i8SQjQOrPUpD3tpjMEuAw/join" target="_blank">YouTube Membership</a> or his <a href="https://www.patreon.com/JohnathanBuckhouse" target="_blank">Patreon</a>.</p>
                            <br>                                 
                            <p><b>How can I help improve this website?</b></p>
                            <p>Feedback is welcome and apperciated! Email Kenny <a href="mailto:shellnut@gmail.com?subject=Buckhouse Ski Map">shellnut@gmail.com</a> with any suggestions or questions. If you're a developer, check out the <a target="_blank" href="https://github.com/Shellnut/Buckhouse">Github</a>.</p>
                            </div>
                            <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">Close</button>
                            </div>`,
                controller: 'InfoModal'
            });
            infoModal.result.then(function() {
                // console.log('done!');
            }, function () {
        });
    }

    $scope.calendarModal = function() {
        var calendarModal = $uibModal.open({
                animation: $scope.animationsEnabled,
                template: `<div class="modal-header">
                            <h3 class="modal-title">
                                <div class="row">
                                    <div class="col-xs-11">
                                        <span><i class="fa fa-calendar" aria-hidden="true"></i> Travel</span>
                                    </div>
                                    <div class="col-xs-1">
                                        <button class="btn btn-sm" style="float:right; clear:all;" ng-click="ok()">X</button>
                                    </div>
                                </div>
                            </h3>
                            </div>
                            <div class="modal-body">
                            <div class="alert alert-warning" role="alert">
                                <i class="fa fa-exclamation-triangle"></i> Please note that none of these dates are 100% guaranteed and that travel is subject to change. Check Johnathan's social media accounts for realtime updates.
                            </div>
                            <iframe src="https://calendar.google.com/calendar/embed?src=Y29keXB1bGwxOTk1QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cmRrZDRzODR1dHVhaWRuMmZlamIzNmpuOG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" style="border:solid 1px #777" width="100%" height="70%" frameborder="0" scrolling="no"></iframe>
                            </div>
                            <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">Close</button>
                            </div>`,
                controller: 'CalendarModal'
            });
            calendarModal.result.then(function() {
                // console.log('done!');
            }, function () {
        });
    }

    $scope.timelineModal = function() {

        $scope.modalData = {'videoData': videoData, 'unitedStatesData': unitedStatesData};
        modalData = {'videoData': videoData, 'unitedStatesData': unitedStatesData}

        var myVideos = modalData.unitedStatesData
            .filter(val => val.officialSkiResort && (val.videos.length > 0))
            .map(val => {
                var myId = val.videos[val.videos.length-1]; 
                var myInfo = modalData.videoData.filter(vidDataVal => vidDataVal.id === myId)[0];
                return {
                    id: myId,
                    resortName: val.resortName,
                    city: val.city,
                    state: val.state,
                    title: myInfo.title,
                    date: myInfo.date
                }
            })
            .sort((a,b) => new Date(b.date) - new Date(a.date));

        // Add index
        myVideos.forEach((val, i, arr) => arr[i].index = arr.length-i);

        var myHtml = myVideos.map((val, i) => {

            var firstVideo = `
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${val.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`; 
            var subsuquentVideos = `<a target="_blank" href="https://www.youtube.com/watch/${val.id}">${val.title}</a>`


            return `
            <div class="panel panel-default">
                <div class="panel-heading"><b>U.S. Ski Resort #${val.index}</b> <span class="pull-right">${new Date(val.date).toLocaleDateString("en-US")}</span></div>
                <div class="panel-body">
                <p>${i===0 ? firstVideo : subsuquentVideos}</p>
                <p><i class="fa fa-map-pin" aria-hidden="true"></i> ${val.resortName} located in ${val.city}, ${val.state}</p>
                </div>
            </div>`
        }).join('\n')

        var timelineModal = $uibModal.open({
                animation: $scope.animationsEnabled,
                template: `<div class="modal-header">
                            <h3 class="modal-title">
                                <div class="row">
                                    <div class="col-xs-11">
                                        <span><i class="fa fa-line-chart" aria-hidden="true"></i> Johnathan's Travel Progress</span>
                                    </div>
                                    <div class="col-xs-1">
                                        <button class="btn btn-sm" style="float:right; clear:all;" ng-click="ok()">X</button>
                                    </div>
                                </div>
                            </h3>
                            </div>
                            <div class="modal-body">
                            ${myHtml}
                            </div>
                            <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">Close</button>
                            </div>`,
                controller: 'TimelineModal',
                resolve: {
                modalData: function () {
                return $scope.modalData;
                }
            }
            });
            timelineModal.result.then(function() {
                // console.log('done!');
            }, function () {
        });
    }

    $scope.mapModal = function(modalData) {

        $scope.modalData = modalData;

        var mapModal = $uibModal.open({
                animation: $scope.animationsEnabled,
                template: `<div class="modal-header">
                            <h3 class="modal-title">
                                <div class="row">
                                    <div class="col-xs-11">
                                        <span><i class="fa fa-map-o" aria-hidden="true"></i> ${modalData.resortName} Map</span>
                                    </div>
                                    <div class="col-xs-1">
                                        <button class="btn btn-sm" style="float:right; clear:all;" ng-click="ok()">X</button>
                                    </div>
                                </div>
                            </h3>
                            </div>
                            <div class="modal-body">
                            <a href="${modalData.mapLink}"><img src="${modalData.mapLink}" width="100%"></a>
                            <hr>
                            <p><i>Map credit goes to skimap.org</i></p>
                            <p>Click <a href="https://skimap.org/SkiAreas/view/${modalData.id}">here</a> for more map infomarion</p>
                            </div>
                            <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">Close</button>
                            </div>`,
                controller: 'MapModal',
                resolve: {
                modalData: function () {
                return $scope.modalData;
                }
            }
            });
            mapModal.result.then(function() {
                // console.log('done!');
            }, function () {
        });
    }

    $scope.webcamModal = function(modalData) {

        var webcamModal = $uibModal.open({
                animation: $scope.animationsEnabled,
                template: `<div class="modal-header">
                            <h3 class="modal-title">
                                <div class="row">
                                    <div class="col-xs-11">
                                        <span><i class="fa fa-video-camera" aria-hidden="true"></i> ${modalData.resortName} Webcam</span>
                                    </div>
                                    <div class="col-xs-1">
                                        <button class="btn btn-sm" style="float:right; clear:all;" ng-click="ok()">X</button>
                                    </div>
                                </div>
                            </h3>
                            </div>
                            <div class="modal-body">
                            ${modalData.webcam.map(val => {
                                return '<h4>' + val.title + '</h4>' +
                                        '<div class="embed-responsive embed-responsive-16by9">' +
                                        '    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + val.link + '?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                                        '</div>'
                            }).join('<br>')}
                            </div>
                            <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">Close</button>
                            </div>`,
                controller: 'WebcamModal'
            });
            webcamModal.result.then(function() {
                // console.log('done!');
            }, function () {
        });
    }

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
});