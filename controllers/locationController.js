app.controller('LocationController', function($scope, $location, myUtilities, leafletData, leafletMarkerEvents) {

	// Defaults
	var myLocation = $location.$$path.toLowerCase();
	var myData = [];
	var myTitle = '';
	var myCenter = {
		lat: 39.480243,
		lng:  -106.06667,
		zoom: 3
	};

	try {
		var myInfo = myUtilities.urlConfig[myLocation]
		myData = myInfo.data;
		myTitle = myInfo.title;
		myCenter = myInfo.center;
	}
	catch (err) {
		console.log('ERROR', err);
		var myInfo = myUtilities.urlConfig['/country/unitedstates']
		myData = myInfo.data;
		myTitle = myInfo.title;
		myCenter = myInfo.center;
	}

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
		},
		leaf_icon: {
				iconUrl: 'img/plain_marker/visited.png',
				shadowUrl: 'img/marker_shadow.png',
				iconSize:     [38, 95], // size of the icon
				shadowSize:   [50, 64], // size of the shadow
				iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
				shadowAnchor: [4, 62],  // the same for the shadow
				popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		},
		div_icon: {
				type: 'div',
				iconSize: [230, 0],
				html: 'Using <strong>Bold text as an icon</strong>: Lisbon',
				popupAnchor:  [0, 0]
		},
		orange_leaf_icon: {
				iconUrl: 'img/plain_marker/visited.png',
				shadowUrl: 'img/marker_shadow.png',
				iconSize:     [38, 95],
				shadowSize:   [50, 64],
				iconAnchor:   [22, 94],
				shadowAnchor: [4, 62]
		}
	};

	angular.extend($scope, {
		icons: local_icons
	});

	$scope.markers = {
		enable: leafletMarkerEvents.getAvailableEvents()
	};

	// NOTE IT'S BUGGY > 100
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

	$scope.legend = {
		position: 'bottomright',
		colors: [ '#ff0000', '#28c9ff', '#0000ff', '#ecf386', '#ecf386', '#ecf386','#ecf386', '#ecf386', '#ecf386' ],
		labels: [ '<b><i class="fa fa-trophy"></i> DREAMER Memberships</b>', 'Dan Da Man', 'Jeff Abbott', 'Dylan Crawford', 'Rick Kinser', 'Lee Bush', 'Nathan Chabot', 'BigAnt6493', 'Lee Miller' ]
	}

});