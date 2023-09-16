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

			// Generate the video link html
			var videoLinks;
			if (myData[i].videos.length === 0) {
				videoLinks = `<p>Johnathan hasn't traveled here yet! Check back soon</p>`;
			}
			else if (myData[i].videos.length === 1) {
				videoLinks = `<p>Here is the only video of Johnathan from this location <iframe src="https://www.youtube-nocookie.com/embed/${myData[i].videos[0]}?playlist=${myData[i].videos.join(',')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>`;
			}
			else if (myData[i].videos.length > 1) {
				if (myData[i].videos.length > 200) {
					videoLinks = `<p>Here are ${myData[i].videos.length} videos (in 2 playlists) of Johnathan from this location <iframe src="https://www.youtube-nocookie.com/embed/${myData[i].videos[0]}?playlist=${myData[i].videos.slice(0, 200).join(',')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>` +
					`<p><iframe src="https://www.youtube-nocookie.com/embed/${myData[i].videos[200]}?playlist=${myData[i].videos.slice(200).join(',')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>`
				}
				else {
					videoLinks = `<p>Here are ${myData[i].videos.length} videos (in a playlist) of Johnathan from this location <iframe src="https://www.youtube-nocookie.com/embed/${myData[i].videos[0]}?playlist=${myData[i].videos.join(',')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>`;              
				}
			}
	
			// Disclaimer for unofficial ski resorts
			var officialSkiResortWarning = '';        
			if (!myData[i].officialSkiResort) {
				officialSkiResortWarning = '<p><b>Note</b>: this is not an official ski resort</p>';
			}
	
			// Link to the website 
			var modalTitle = '';
			if (myData[i].website) {
				modalTitle = `<h4 id="firstHeading" class="firstHeading"><a href="${myData[i].website}" target="_blank" title="Resort Website">${myData[i].resortName}, ${myData[i].state || myData[i].country || (myData[i].position.lat + ' ' + myData[i].position.lng)}</a></h4>`;
			}
			else {
				modalTitle = `<h4 id="firstHeading" class="firstHeading">${myData[i].resortName}, ${myData[i].state || myData[i].country || (myData[i].position.lat + ' ' + myData[i].position.lng)}</h4>`;
			}
	
			// Link to the score
			var resortReview = '';
			if (myData[i].resortReview.score && !myData[i].resortReview.note) {
				resortReview = `<p>Johnathan's Resort Review Score: <a target="_blank" href="https://www.youtube.com/watch/${myData[i].resortReview.link}">${myData[i].resortReview.score}/100</a></p>`;
			}
			else if (myData[i].resortReview.score && myData[i].resortReview.note) {
				resortReview = `<p>Johnathan's Resort Review Score: <a target="_blank" href="https://www.youtube.com/watch/${myData[i].resortReview.link}">${myData[i].resortReview.score}/100</a>*<br/><small>*${myData[i].resortReview.note}</small></p>`;
			}
	
			// Link to the ski pass(es)
			var skiPasses = '';
			if (myData[i].skiPass.length > 0) {
				var passes = [
					{
						name: 'Epic',
						link: `<a target="_blank" href="https://www.epicpass.com">Epic</a>`
					},
					{
						name: 'Ikon',
						link: `<a target="_blank" href="https://www.ikonpass.com">Ikon</a>`
					},
					{
						name: 'Mountain Collective',
						link: `<a target="_blank" href="https://www.mountaincollective.com">Mountain Collective</a>`
					},
					{
						name: 'Powder Alliance',
						link: `<a target="_blank" href="https://www.powderalliance.com">Powder Alliance</a>`
					},
					{
						name: 'Indy',
						link: `<a target="_blank" href="https://www.indyskipass.com/">Indy</a>`
					}
				];
				skiPasses = `<p>${(myData[i].skiPass.length>1) ? 'Ski Passes:' : 'Ski Pass:'} ${passes.filter(val => myData[i].skiPass.includes(val.name)).map(val => val.link).join(', ')}`;
			}
	
			// HTML popup content
			var popupContent = '<div id="content">' +
								'<div id="siteNotice">' +
								'</div>' +
								modalTitle +
								'<div id="bodyContent">' +
								resortReview +
								skiPasses +
								officialSkiResortWarning +
								videoLinks +
								'</div>' +
								'</div>';
	
	
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
				message: popupContent,
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

});
