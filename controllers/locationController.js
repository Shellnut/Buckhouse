app.controller('LocationController', function($scope, $location, myUtilities, leafletData, leafletMarkerEvents, Data) {

	// Defaults
	var myLocation = $location.$$path.toLowerCase();
	var myData = [];
	var myTitle = '';
	var myCenter = {
		lat: 39.480243,
		lng:  -106.06667,
		zoom: 3
	};

    $scope.Data = Data;

	$scope.myError = '';

	try {
		$scope.myError = '';
		var myInfo = myUtilities.urlConfig[myLocation]
		myData = myInfo.data;
		myTitle = myInfo.title;
		myCenter = myInfo.center;
	}
	catch (err) {
		console.log('ERROR', err);
		$scope.myError = 'Unable to find path: ' + myLocation;
		var myInfo = myUtilities.urlConfig['/country/unitedstates']
		myData = myInfo.data;
		myTitle = myInfo.title;
		myCenter = myInfo.center;
	}

	$scope.visitedCount = myData.filter(val => val.videos.length > 0 && val.officialSkiResort).length;
    $scope.skiResortCount = myData.filter(val => val.officialSkiResort).length;
    $scope.myTitle = myTitle;

	$scope.lastUpdated = lastUpdated;
	$scope.orderByField = 'videos.length';
	$scope.reverseSort = true;

	$scope.allData = myData;

	// Fullscreen Option
	leafletData.getMap().then(function(map) {
		map.addControl(new L.Control.Fullscreen());
	});

	angular.extend($scope, {
		defaults: {
			tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			maxZoom: 14,
		}
	});

	// Center
	$scope.center = myCenter;

	// Load the icon preference
	var iconPreference;
	if (!!localStorage.getItem('plainMarker')) {
		iconPreference = 'plain_marker';
	}
	else {
		iconPreference = 'snowboard_marker';
	}


	// Marker click event. Open Modal
	$scope.$on("leafletDirectiveMarker.click", function(event, args){
		var leafEvent = args.leafletEvent;
		var myResortData = myData.filter(val => val.position.lat === leafEvent.latlng.lat && val.position.lng === leafEvent.latlng.lng)[0];
		$scope.openModal(myResortData);
	});


	var updateMap = function() {

		var local_icons = {
			greenIcon: {
				iconUrl: `img/${iconPreference}/visited.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			blackIcon: {
				iconUrl: `img/${iconPreference}/unofficial.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			redIcon: {
				iconUrl: `img/${iconPreference}/not_visited.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			greenSkiIcon: {
				iconUrl: `img/${iconPreference}/visited_ski.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: !!localStorage.getItem('plainMarker') ? [25, 41] : [35, 57],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			redSkiIcon: {
				iconUrl: `img/${iconPreference}/not_visited_ski.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: !!localStorage.getItem('plainMarker') ? [25, 41] : [35, 57],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			greenHelicopterIcon: {
				iconUrl: `img/${iconPreference}/visited_helicopter.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: !!localStorage.getItem('plainMarker') ? [25, 41] : [40, 45],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			redHelicopterIcon: {
				iconUrl: `img/${iconPreference}/not_visited_helicopter.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: !!localStorage.getItem('plainMarker') ? [25, 41] : [40, 45],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			greenSnowcatIcon: {
				iconUrl: `img/${iconPreference}/visited_snowcat.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: !!localStorage.getItem('plainMarker') ? [25, 41] : [50, 45],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			redSnowcatIcon: {
				iconUrl: `img/${iconPreference}/not_visited_snowcat.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: !!localStorage.getItem('plainMarker') ? [25, 41] : [50, 45],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			homeIcon: {
				iconUrl: `img/${iconPreference}/home.png`,
				shadowUrl: 'img/marker_shadow.png',
				iconSize: [25, 35],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			}
		};
	
		angular.extend($scope, {
			icons: local_icons
		});
	
		$scope.markers = {
			enable: leafletMarkerEvents.getAvailableEvents()
		};
	
		for (var i=0; i<myData.length; i++) {
	
			// Assign the icon color (visited or not)   
			var icon;
			var circleColor;
			if (myData[i].resortName === 'Backyard Parks in Summit County') {
				icon = 'homeIcon'; // not yet visited for helicopter only resort
				circleColor = 'black';
			}
			else if (!myData[i].officialSkiResort) {
				icon = 'blackIcon'; // unofficial ski resort
				circleColor = 'black';
			}
			else if (myData[i].skiOnly && myData[i].videos.length > 0) {
				icon = 'greenSkiIcon'; // visited ski only resort
				circleColor = 'green';
			}
			else if (myData[i].skiOnly && myData[i].videos.length === 0) {
				icon = 'redSkiIcon'; // not yet visited for ski only resort
				circleColor = 'red';
			}
			else if (myData[i].helicopterOnly && myData[i].videos.length > 0) {
				icon = 'greenHelicopterIcon'; // visited helicopter only resort
				circleColor = 'green';
			}
			else if (myData[i].helicopterOnly && myData[i].videos.length === 0) {
				icon = 'redHelicopterIcon'; // not yet visited for helicopter only resort
				circleColor = 'black';
			}
			else if (myData[i].snowcatOnly && myData[i].videos.length > 0) {
				icon = 'greenSnowcatIcon'; // visited helicopter only resort
				circleColor = 'green';
			}
			else if (myData[i].snowcatOnly && myData[i].videos.length === 0) {
				icon = 'redSnowcatIcon'; // not yet visited for helicopter only resort
				circleColor = 'red';
			}
			else if (myData[i].videos.length > 0) {
				icon = 'greenIcon'; // visited
				circleColor = 'green';
			}
			else {
				icon = 'redIcon'; // not yet visited
				circleColor = 'red';
			}
	
			$scope.markers[`resort_${i}`] = {
				lat: myData[i].position.lat,
				lng: myData[i].position.lng,
				icon: local_icons[icon],
				focus: false,
				draggable: false
			}
		}
	}

	updateMap();

	$scope.$watch('Data.marker', function(newValue, oldValue) {
		if (newValue!==oldValue) {
			if (newValue) {
				iconPreference = 'plain_marker';
			}
			else {
				iconPreference = 'snowboard_marker';
			}
			updateMap();
		} 
	 });

	 // Zoom to coords on table click
	 $scope.zoomToCoords = function(myPosition) {
		$scope.center = {
			lat: myPosition.lat,
			lng: myPosition.lng,
			zoom: 10
		};
	 }

	// Custom sort for table
	$scope.myOrder = function(field) {
		console.log('field', field);
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

	$scope.legend = {
		position: 'bottomright',
		colors: [ '#ff0000', '#28c9ff', '#0000ff', '#ecf386', '#ecf386', '#ecf386','#ecf386', '#ecf386', '#ecf386' ],
		labels: [ '<b><i class="fa fa-trophy"></i> DREAMER Memberships</b>', 'Dan Da Man', 'Jeff Abbott', 'Dylan Crawford', 'Rick Kinser', 'Lee Bush', 'Nathan Chabot', 'BigAnt6493', 'Lee Miller' ]
	}

	$scope.selected = undefined;
	$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

});
