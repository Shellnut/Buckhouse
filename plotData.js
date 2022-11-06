// Percentage Complete by Region
var midwestData = allData.filter(val=>val.region==='Midwest' && val.officialSkiResort);
var westCoastData = allData.filter(val=>val.region==='West Coast' && val.officialSkiResort);
var rockyMountainData = allData.filter(val=>val.region==='Rocky Mountains' && val.officialSkiResort);
var newEnglandData = allData.filter(val=>val.region==='New England' && val.officialSkiResort);
var midAtlanticData = allData.filter(val=>val.region==='Mid-Atlantic' && val.officialSkiResort);
var southeastData = allData.filter(val=>val.region==='Southeast' && val.officialSkiResort);
var coloradoData = allData.filter(val=>val.state==='Colorado' && val.officialSkiResort);

var regionData = {
  midwest: 100*(midwestData.filter(val=>val.videos.length>0).length / midwestData.length),
  westCoast: 100*(westCoastData.filter(val=>val.videos.length>0).length / westCoastData.length),
  rockyMountain: 100*(rockyMountainData.filter(val=>val.videos.length>0).length / rockyMountainData.length),
  newEngland: 100*(newEnglandData.filter(val=>val.videos.length>0).length / newEnglandData.length),
  midAtlantic: 100*(midAtlanticData.filter(val=>val.videos.length>0).length / midAtlanticData.length),
  southeast: 100*(southeastData.filter(val=>val.videos.length>0).length / southeastData.length)
};

// Percentage Complete by State
var alabamaData = allData.filter(val=>val.state==='Alabama' && val.officialSkiResort);
var alaskaData = allData.filter(val=>val.state==='Alaska' && val.officialSkiResort);
var arizonaData = allData.filter(val=>val.state==='Arizona' && val.officialSkiResort);
var californiaData = allData.filter(val=>val.state==='California' && val.officialSkiResort);
var coloradoData = allData.filter(val=>val.state==='Colorado' && val.officialSkiResort);
var connecticutData = allData.filter(val=>val.state==='Connecticut' && val.officialSkiResort);
var idahoData = allData.filter(val=>val.state==='Idaho' && val.officialSkiResort);
var illinoisData = allData.filter(val=>val.state==='Illinois' && val.officialSkiResort);
var indianaData = allData.filter(val=>val.state==='Indiana' && val.officialSkiResort);
var iowaData = allData.filter(val=>val.state==='Iowa' && val.officialSkiResort);
var maineData = allData.filter(val=>val.state==='Maine' && val.officialSkiResort);
var marylandData = allData.filter(val=>val.state==='Maryland' && val.officialSkiResort);
var massachusettsData = allData.filter(val=>val.state==='Massachusetts' && val.officialSkiResort);
var michiganData = allData.filter(val=>val.state==='Michigan' && val.officialSkiResort);
var minnesotaData = allData.filter(val=>val.state==='Minnesota' && val.officialSkiResort);
var missouriData = allData.filter(val=>val.state==='Missouri' && val.officialSkiResort);
var montanaData = allData.filter(val=>val.state==='Montana' && val.officialSkiResort);
var nevadaData = allData.filter(val=>val.state==='Nevada' && val.officialSkiResort);
var newHampshireData = allData.filter(val=>val.state==='New Hampshire' && val.officialSkiResort);
var newJerseyData = allData.filter(val=>val.state==='New Jersey' && val.officialSkiResort);
var newMexicoData = allData.filter(val=>val.state==='New Mexico' && val.officialSkiResort);
var newYorkData = allData.filter(val=>val.state==='New York' && val.officialSkiResort);
var northCarolinaData = allData.filter(val=>val.state==='North Carolina' && val.officialSkiResort);
var northDakotaData = allData.filter(val=>val.state==='North Dakota' && val.officialSkiResort);
var ohioData = allData.filter(val=>val.state==='Ohio' && val.officialSkiResort);
var oregonData = allData.filter(val=>val.state==='Oregon' && val.officialSkiResort);
var pennsylvaniaData = allData.filter(val=>val.state==='Pennsylvania' && val.officialSkiResort);
var rhodeIslandData = allData.filter(val=>val.state==='Rhode Island' && val.officialSkiResort);
var southDakotaData = allData.filter(val=>val.state==='South Dakota' && val.officialSkiResort);
var tennesseeData = allData.filter(val=>val.state==='Tennessee' && val.officialSkiResort);
var texasData = allData.filter(val=>val.state==='Texas' && val.officialSkiResort);
var utahData = allData.filter(val=>val.state==='Utah' && val.officialSkiResort);
var vermontData = allData.filter(val=>val.state==='Vermont' && val.officialSkiResort);
var virginiaData = allData.filter(val=>val.state==='Virginia' && val.officialSkiResort);
var washingtonData = allData.filter(val=>val.state==='Washington' && val.officialSkiResort);
var westVirginiaData = allData.filter(val=>val.state==='West Virginia' && val.officialSkiResort);
var wisconsinData = allData.filter(val=>val.state==='Wisconsin' && val.officialSkiResort);
var wyomingData = allData.filter(val=>val.state==='Wyoming' && val.officialSkiResort);

var stateData = {
  alabama: 100*(alabamaData.filter(val=>val.videos.length>0).length / alabamaData.length),
  alaska: 100*(alaskaData.filter(val=>val.videos.length>0).length / alaskaData.length),
  arizona: 100*(arizonaData.filter(val=>val.videos.length>0).length / arizonaData.length),
  arkansas: 0,
  california: 100*(californiaData.filter(val=>val.videos.length>0).length / californiaData.length),
  colorado: 100*(coloradoData.filter(val=>val.videos.length>0).length / coloradoData.length),
  connecticut: 100*(connecticutData.filter(val=>val.videos.length>0).length / connecticutData.length),
  delaware: 0,
  florida: 0,
  georgia: 0,
  hawaii: 0,
  idaho: 100*(idahoData.filter(val=>val.videos.length>0).length / idahoData.length),
  illinois: 100*(illinoisData.filter(val=>val.videos.length>0).length / illinoisData.length),
  indiana: 100*(indianaData.filter(val=>val.videos.length>0).length / indianaData.length),
  iowa: 100*(iowaData.filter(val=>val.videos.length>0).length / iowaData.length),
  kansas: 0,
  kentucky: 0,
  louisiana: 0,
  maine: 100*(maineData.filter(val=>val.videos.length>0).length / maineData.length),
  maryland: 100*(marylandData.filter(val=>val.videos.length>0).length / marylandData.length),
  massachusetts: 100*(massachusettsData.filter(val=>val.videos.length>0).length / massachusettsData.length),
  michigan: 100*(michiganData.filter(val=>val.videos.length>0).length / michiganData.length),
  minnesota: 100*(minnesotaData.filter(val=>val.videos.length>0).length / minnesotaData.length),
  mississippi: 0,
  missouri: 100*(missouriData.filter(val=>val.videos.length>0).length / missouriData.length),
  montana: 100*(montanaData.filter(val=>val.videos.length>0).length / montanaData.length),
  nebraska: 0,
  nevada: 100*(nevadaData.filter(val=>val.videos.length>0).length / nevadaData.length),
  newHampshire: 100*(newHampshireData.filter(val=>val.videos.length>0).length / newHampshireData.length),
  newJersey: 100*(newJerseyData.filter(val=>val.videos.length>0).length / newJerseyData.length),
  newMexico: 100*(newMexicoData.filter(val=>val.videos.length>0).length / newMexicoData.length),
  newYork: 100*(newYorkData.filter(val=>val.videos.length>0).length / newYorkData.length),
  northCarolina: 100*(northCarolinaData.filter(val=>val.videos.length>0).length / northCarolinaData.length),
  northDakota: 100*(northDakotaData.filter(val=>val.videos.length>0).length / northDakotaData.length),
  ohio: 100*(ohioData.filter(val=>val.videos.length>0).length / ohioData.length),
  oklahoma: 0,
  oregon: 100*(oregonData.filter(val=>val.videos.length>0).length / oregonData.length),
  pennsylvania: 100*(pennsylvaniaData.filter(val=>val.videos.length>0).length / pennsylvaniaData.length),
  rhodeIsland: 100*(rhodeIslandData.filter(val=>val.videos.length>0).length / rhodeIslandData.length),
  southCarolina: 0,
  southDakota: 100*(southDakotaData.filter(val=>val.videos.length>0).length / southDakotaData.length),
  tennessee: 100*(tennesseeData.filter(val=>val.videos.length>0).length / tennesseeData.length),
  texas: 0,
  utah: 100*(utahData.filter(val=>val.videos.length>0).length / utahData.length),
  vermont: 100*(vermontData.filter(val=>val.videos.length>0).length / vermontData.length),
  virginia: 100*(virginiaData.filter(val=>val.videos.length>0).length / virginiaData.length),
  washington: 100*(washingtonData.filter(val=>val.videos.length>0).length / washingtonData.length),
  westVirginia: 100*(westVirginiaData.filter(val=>val.videos.length>0).length / westVirginiaData.length),
  wisconsin: 100*(wisconsinData.filter(val=>val.videos.length>0).length / wisconsinData.length),
  wyoming: 100*(wyomingData.filter(val=>val.videos.length>0).length / wyomingData.length),
};

// Season start dates
var s1Start = '2016-10-22T16:44:04Z';
var s2Start = '2017-10-13T23:57:51Z';
var s3Start = '2018-10-10T01:59:30Z';
var s4Start = '2019-10-12T03:45:14Z';
var s5Start = '2020-10-25T22:45:12Z';
var s6Start = '2021-10-14T22:45:12Z';
var s7Start = '2022-10-23T10:00:00Z';
var s8Start = '2023-10-14T22:45:12Z';
  
// Season resorts
var s0Resorts = [];
var s1Resorts = [];
var s2Resorts = [];
var s3Resorts = [];
var s4Resorts = [];
var s5Resorts = [];
var s6Resorts = [];
var s7Resorts = [];
var s8Resorts = [];

// Sort the video data
var videoDataSorted = videoData.sort((a,b)=>new Date(a.date).getTime()-new Date(b.date).getTime());

// Get all new resorts for all seasons
for (var i=0; i<videoDataSorted.length; i++) {

  // Get resort name of the official ski resorts
  var resortName;
  var validResort = allData.filter(val => val.officialSkiResort)
                           .filter(val => val.videos.includes(videoDataSorted[i].id));

  // Only count valid resorts
  if (validResort.length > 0) {
    resortName = validResort[0].resortName;
    // Get new resorts traveled to for season 0
    if (new Date(videoDataSorted[i].date) < new Date(s1Start)) {
      var visitedResorts = s0Resorts;
      if (!visitedResorts.includes(resortName)) {
        s0Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 1
    else if (new Date(videoDataSorted[i].date) >= new Date(s1Start) && new Date(videoDataSorted[i].date) < new Date(s2Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts);
      if (!visitedResorts.includes(resortName)) {
        s1Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 2
    else if (new Date(videoDataSorted[i].date) >= new Date(s2Start) && new Date(videoDataSorted[i].date) < new Date(s3Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts);
      if (!visitedResorts.includes(resortName)) {
        s2Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 3
    else if (new Date(videoDataSorted[i].date) >= new Date(s3Start) && new Date(videoDataSorted[i].date) < new Date(s4Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts);
      if (!visitedResorts.includes(resortName)) {
        s3Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 4
    else if (new Date(videoDataSorted[i].date) >= new Date(s4Start) && new Date(videoDataSorted[i].date) < new Date(s5Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts).concat(s4Resorts);
      if (!visitedResorts.includes(resortName)) {
        s4Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 5
    else if (new Date(videoDataSorted[i].date) >= new Date(s5Start) && new Date(videoDataSorted[i].date) < new Date(s6Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts).concat(s4Resorts).concat(s5Resorts);
      if (!visitedResorts.includes(resortName)) {
        s5Resorts.push(resortName);
      }
    }
    // Get new resorts traveled to for season 6
    else if (new Date(videoDataSorted[i].date) >= new Date(s6Start) && new Date(videoDataSorted[i].date) < new Date(s7Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts).concat(s4Resorts).concat(s5Resorts).concat(s6Resorts);
      if (!visitedResorts.includes(resortName)) {
        s6Resorts.push(resortName);
      }
    }
    else if (new Date(videoDataSorted[i].date) >= new Date(s7Start) && new Date(videoDataSorted[i].date) < new Date(s8Start)) {
      var visitedResorts = s0Resorts.concat(s1Resorts).concat(s2Resorts).concat(s3Resorts).concat(s4Resorts).concat(s5Resorts).concat(s6Resorts).concat(s7Resorts);
      if (!visitedResorts.includes(resortName)) {
        s7Resorts.push(resortName);
      }
    }
  }

}

// Get view stats per season
var s0Views = [];
var s1Views = [];
var s2Views = [];
var s3Views = [];
var s4Views = [];
var s5Views = [];
var s6Views = [];
var s7Views = [];

// Mertics by season
var s0Metrics = [];
var s1Metrics = [];
var s2Metrics = [];
var s3Metrics = [];
var s4Metrics = [];
var s5Metrics = [];
var s6Metrics = [];
var s7Metrics = [];

// Get all new resorts for all seasons
for (var i=0; i<videoDataSorted.length; i++) {

  videoViews = Number(videoDataSorted[i].views);

  // Get new resorts traveled to for season 0
  if (new Date(videoDataSorted[i].date) < new Date(s1Start)) {
    s0Views.push(videoViews);
    s0Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 1
  else if (new Date(videoDataSorted[i].date) >= new Date(s1Start) && new Date(videoDataSorted[i].date) < new Date(s2Start)) {
    s1Views.push(videoViews);
    s1Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 2
  else if (new Date(videoDataSorted[i].date) >= new Date(s2Start) && new Date(videoDataSorted[i].date) < new Date(s3Start)) {
    s2Views.push(videoViews);
    s2Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 3
  else if (new Date(videoDataSorted[i].date) >= new Date(s3Start) && new Date(videoDataSorted[i].date) < new Date(s4Start)) {
    s3Views.push(videoViews);
    s3Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 4
  else if (new Date(videoDataSorted[i].date) >= new Date(s4Start) && new Date(videoDataSorted[i].date) < new Date(s5Start)) {
    s4Views.push(videoViews);
    s4Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 5
  else if (new Date(videoDataSorted[i].date) >= new Date(s5Start) && new Date(videoDataSorted[i].date) < new Date(s6Start)) {
    s5Views.push(videoViews);
    s5Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 6
  else if (new Date(videoDataSorted[i].date) >= new Date(s6Start) && new Date(videoDataSorted[i].date) < new Date(s7Start)) {
    s6Views.push(videoViews);
    s6Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }
  // Get new resorts traveled to for season 7
  else if (new Date(videoDataSorted[i].date) >= new Date(s7Start) && new Date(videoDataSorted[i].date) < new Date(s8Start)) {
    s7Views.push(videoViews);
    s7Metrics.push({
      views: videoViews,
      date: videoDataSorted[i].date,
      id: videoDataSorted[i].id,
      title: videoDataSorted[i].title
    });
  }

}

// -------------------
// Graphs
// -------------------

// Config for all graphs
var config = {responsive: true};

// Resorts by season
var resortsBySeasonTrace = {
  x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7"],
  y: [s0Resorts.length, s1Resorts.length, s2Resorts.length, s3Resorts.length, s4Resorts.length, s5Resorts.length, s6Resorts.length, s7Resorts.length],
  type: 'bar'
};

var resortBySeasonData = [resortsBySeasonTrace];

var resortBySeasonLayout = {
  title: 'Number of New Resorts Traveled to by Season',
  yaxis: {
    title: '# of New Resorts',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('newResortsBySeason', resortBySeasonData, resortBySeasonLayout, config);


// Videos per season
var videosBySeasonTraceAvg = {
  x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7"],
  y: [s0Metrics.length, s1Metrics.length, s2Metrics.length, s3Metrics.length, s4Metrics.length, s5Metrics.length, s6Metrics.length, s7Metrics.length],
  type: 'bar'
};

var videosBySeasonData = [videosBySeasonTraceAvg];

var videosBySeasonLayout = {
  title:`Videos Created by Season`,
  yaxis: {
    title: '# Videos',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  },
  // annotations: [
  //   {
  //     x: 2.5,
  //     y: 280,
  //     xref: 'x',
  //     yref: 'y',
  //     text: 'This count is only ski resort related videos',
  //     showarrow: false,
  //     font: {
  //       size: 12,
  //       color: 'gray'
  //     },
  //     align: 'center',
  //     opacity: 0.8
  //   }
  // ]
};

Plotly.newPlot('videosBySeason', videosBySeasonData, videosBySeasonLayout, config);


// Views by season AVG
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
var avg = (array) => array.length > 0 ? Math.floor(array.reduce((a, b) => a + b) / array.length) : 0;

var s0Avg = avg(s0Views);
var s0Min = Math.min(...s0Views);
var s0Max = Math.max(...s0Views);
var s1Avg = avg(s1Views);
var s1Min = Math.min(...s1Views);
var s1Max = Math.max(...s1Views);
var s2Avg = avg(s2Views);
var s2Min = Math.min(...s2Views);
var s2Max = Math.max(...s2Views);
var s3Avg = avg(s3Views);
var s3Min = Math.min(...s3Views);
var s3Max = Math.max(...s3Views);
var s4Avg = avg(s4Views);
var s4Min = Math.min(...s4Views);
var s4Max = Math.max(...s4Views);
var s5Avg = avg(s5Views);
var s5Min = Math.min(...s5Views);
var s5Max = Math.max(...s5Views);
var s6Avg = avg(s6Views);
var s6Min = Math.min(...s6Views);
var s6Max = Math.max(...s6Views);
var s7Avg = avg(s7Views);
var s7Min = Math.min(...s7Views);
var s7Max = Math.max(...s7Views);

var viewsBySeasonTraceAvg = {
  x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7"],
  y: [s0Avg, s1Avg, s2Avg, s3Avg, s4Avg, s5Avg, s6Avg, s7Avg],
  type: 'bar'
};
// var viewsBySeasonTraceMin = {
//   x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
//   y: [s0Min, s1Min, s2Min, s3Min, s4Min, s5Min],
//   type: 'scatter'
// };
// var viewsBySeasonTraceMax = {
//   x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
//   y: [s0Max, s1Max, s2Max, s3Max, s4Max, s5Max],
//   type: 'scatter'
// };

var viewsBySeasonData = [viewsBySeasonTraceAvg];
// var viewsBySeasonData = [viewsBySeasonTraceAvg, viewsBySeasonTraceMin, viewsBySeasonTraceMax];

var viewsBySeasonLayout = {
  title: 'Average Video Views by Season',
  yaxis: {
    title: '# Video Views',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('viewsBySeason', viewsBySeasonData, viewsBySeasonLayout, config);

// Views by season TOTAL
var avg = (array) => array.length > 0 ? Math.floor(array.reduce((a, b) => a + b) / array.length) : 0;

var s0Tot = sum(s0Views);
var s1Tot = sum(s1Views);
var s2Tot = sum(s2Views);
var s3Tot = sum(s3Views);
var s4Tot = sum(s4Views);
var s5Tot = sum(s5Views);
var s6Tot = sum(s6Views);
var s7Tot = sum(s7Views);

var viewsTotalBySeasonTrace = {
  x: ["Season 0", "Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7"],
  y: [s0Tot, s1Tot, s2Tot, s3Tot, s4Tot, s5Tot, s6Tot, s7Tot],
  type: 'bar'
};

var viewsTotalBySeasonData = [viewsTotalBySeasonTrace];
// var viewsBySeasonData = [viewsBySeasonTraceAvg, viewsBySeasonTraceMin, viewsBySeasonTraceMax];

var viewsTotalBySeasonLayout = {
  title: 'Total Video Views by Season',
  yaxis: {
    title: '# Video Views',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('viewsTotalBySeason', viewsTotalBySeasonData, viewsTotalBySeasonLayout, config);


// Views by Month by Season
function getAvgViewsByMonth(sData) {

  var oct = [];
  var nov = [];
  var dec = [];
  var jan = [];
  var feb = [];
  var mar = [];
  var apr = [];
  var may = [];
  var jun = [];
  var jul = [];
  var aug = [];
  var sep = [];

  for (var i=0; i<sData.length; i++) {
    var myMonth = new Date(sData[i].date).getMonth();
    if (myMonth === 0) {
      jan.push(sData[i].views);
    }
    else if (myMonth === 1) {
      feb.push(sData[i].views);
    }
    else if (myMonth === 2) {
      mar.push(sData[i].views);
    }
    else if (myMonth === 3) {
      apr.push(sData[i].views);
    }
    else if (myMonth === 4) {
      may.push(sData[i].views);
    }
    else if (myMonth === 5) {
      jun.push(sData[i].views);
    }
    else if (myMonth === 6) {
      jul.push(sData[i].views);
    }
    else if (myMonth === 7) {
      aug.push(sData[i].views);
    }
    else if (myMonth === 8) {
      sep.push(sData[i].views);
    }
    else if (myMonth === 9) {
      oct.push(sData[i].views);
    }
    else if (myMonth === 10) {
      nov.push(sData[i].views);
    }
    else if (myMonth === 11) {
      dec.push(sData[i].views);
    }
  }
  return [avg(oct), avg(nov), avg(dec), avg(jan), avg(feb), avg(mar), avg(apr), avg(may), avg(jun), avg(jul), avg(aug), avg(sep)]

}

var monthsX = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

var viewsSeason1Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s1Metrics),
  type: 'scatter',
  name: 'Season 1'
};
var viewsSeason2Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s2Metrics),
  type: 'scatter',
  name: 'Season 2'
};
var viewsSeason3Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s3Metrics),
  type: 'scatter',
  name: 'Season 3'
};
var viewsSeason4Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s4Metrics),
  type: 'scatter',
  name: 'Season 4'
};
var viewsSeason5Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s5Metrics),
  type: 'scatter',
  name: 'Season 5'
};
var viewsSeason6Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s6Metrics),
  type: 'scatter',
  name: 'Season 6'
};
var viewsSeason7Trace = {
  x: monthsX,
  y: getAvgViewsByMonth(s7Metrics),
  type: 'scatter',
  name: 'Season 7'
};

var monthData = [viewsSeason1Trace, viewsSeason2Trace, viewsSeason3Trace, viewsSeason4Trace, viewsSeason5Trace, viewsSeason6Trace, viewsSeason7Trace];

var monthLayout = {
  title: 'Avg Views Per Video Per Month',
  yaxis: {
    title: '# of Views',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('videoViewsByMonth', monthData, monthLayout, config);

// Views by Month by Season
function getTotalViewsByMonth(sData) {

  var oct = [];
  var nov = [];
  var dec = [];
  var jan = [];
  var feb = [];
  var mar = [];
  var apr = [];
  var may = [];
  var jun = [];
  var jul = [];
  var aug = [];
  var sep = [];

  for (var i=0; i<sData.length; i++) {
    var myMonth = new Date(sData[i].date).getMonth();
    if (myMonth === 0) {
      jan.push(sData[i].views);
    }
    else if (myMonth === 1) {
      feb.push(sData[i].views);
    }
    else if (myMonth === 2) {
      mar.push(sData[i].views);
    }
    else if (myMonth === 3) {
      apr.push(sData[i].views);
    }
    else if (myMonth === 4) {
      may.push(sData[i].views);
    }
    else if (myMonth === 5) {
      jun.push(sData[i].views);
    }
    else if (myMonth === 6) {
      jul.push(sData[i].views);
    }
    else if (myMonth === 7) {
      aug.push(sData[i].views);
    }
    else if (myMonth === 8) {
      sep.push(sData[i].views);
    }
    else if (myMonth === 9) {
      oct.push(sData[i].views);
    }
    else if (myMonth === 10) {
      nov.push(sData[i].views);
    }
    else if (myMonth === 11) {
      dec.push(sData[i].views);
    }
  }
  return [sum(oct), sum(nov), sum(dec), sum(jan), sum(feb), sum(mar), sum(apr), sum(may), sum(jun), sum(jul), sum(aug), sum(sep)]

}

var viewsTotalSeason1Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s1Metrics),
  type: 'scatter',
  name: 'Season 1'
};
var viewsTotalSeason2Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s2Metrics),
  type: 'scatter',
  name: 'Season 2'
};
var viewsTotalSeason3Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s3Metrics),
  type: 'scatter',
  name: 'Season 3'
};
var viewsTotalSeason4Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s4Metrics),
  type: 'scatter',
  name: 'Season 4'
};
var viewsTotalSeason5Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s5Metrics),
  type: 'scatter',
  name: 'Season 5'
};
var viewsTotalSeason6Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s6Metrics),
  type: 'scatter',
  name: 'Season 6'
};
var viewsTotalSeason7Trace = {
  x: monthsX,
  y: getTotalViewsByMonth(s7Metrics),
  type: 'scatter',
  name: 'Season 7'
};

var monthTotalData = [viewsTotalSeason1Trace, viewsTotalSeason2Trace, viewsTotalSeason3Trace, viewsTotalSeason4Trace, viewsTotalSeason5Trace, viewsTotalSeason6Trace, viewsTotalSeason7Trace];

var monthTotalLayout = {
  title: 'Total Views Per Month',
  yaxis: {
    title: '# of Views',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('totalViewsPerMonth', monthTotalData, monthTotalLayout, config);


// Visited State Heatmap
var myLocations = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
];
var myStates = [
  `Alabama ${alabamaData.filter(val=>val.videos.length>0).length}/${alabamaData.length} (${Math.round(stateData.alabama)}%)`,
  `Alaska ${alaskaData.filter(val=>val.videos.length>0).length}/${alaskaData.length} (${Math.round(stateData.alaska)}%)`,
  `Arizona ${arizonaData.filter(val=>val.videos.length>0).length}/${arizonaData.length} (${Math.round(stateData.arizona)}%)`,
  `Arkansas 0/0 (${Math.round(stateData.arkansas)}%)`,
  `California ${californiaData.filter(val=>val.videos.length>0).length}/${californiaData.length} (${Math.round(stateData.california)}%)`,
  `Colorado ${coloradoData.filter(val=>val.videos.length>0).length}/${coloradoData.length} (${Math.round(stateData.colorado)}%)`,
  `Connecticut ${connecticutData.filter(val=>val.videos.length>0).length}/${connecticutData.length} (${Math.round(stateData.connecticut)}%)`,
  `Delaware 0/0 (${Math.round(stateData.delaware)}%)`,
  `Florida 0/0 (${Math.round(stateData.florida)}%)`,
  `Georgia 0/0 (${Math.round(stateData.georgia)}%)`,
  `Hawaii 0/0 (${Math.round(stateData.hawaii)}%)`,
  `Idaho ${idahoData.filter(val=>val.videos.length>0).length}/${idahoData.length} (${Math.round(stateData.idaho)}%)`,
  `Illinois ${illinoisData.filter(val=>val.videos.length>0).length}/${illinoisData.length} (${Math.round(stateData.illinois)}%)`,
  `Indiana ${indianaData.filter(val=>val.videos.length>0).length}/${indianaData.length} (${Math.round(stateData.indiana)}%)`,
  `Iowa ${iowaData.filter(val=>val.videos.length>0).length}/${iowaData.length} (${Math.round(stateData.iowa)}%)`,
  `Kansas 0/0 (${Math.round(stateData.kansas)}%)`,
  `Kentucky 0/0 (${Math.round(stateData.kentucky)}%)`,
  `Louisiana 0/0 (${Math.round(stateData.louisiana)}%)`,
  `Maine ${maineData.filter(val=>val.videos.length>0).length}/${maineData.length} (${Math.round(stateData.maine)}%)`,
  `Maryland ${marylandData.filter(val=>val.videos.length>0).length}/${marylandData.length} (${Math.round(stateData.maryland)}%)`,
  `Massachusetts ${massachusettsData.filter(val=>val.videos.length>0).length}/${massachusettsData.length} (${Math.round(stateData.massachusetts)}%)`,
  `Michigan ${michiganData.filter(val=>val.videos.length>0).length}/${michiganData.length} (${Math.round(stateData.michigan)}%)`,
  `Minnesota ${minnesotaData.filter(val=>val.videos.length>0).length}/${minnesotaData.length} (${Math.round(stateData.minnesota)}%)`,
  `Mississippi 0/0 (${Math.round(stateData.mississippi)}%)`,
  `Missouri ${missouriData.filter(val=>val.videos.length>0).length}/${missouriData.length} (${Math.round(stateData.missouri)}%)`,
  `Montana ${montanaData.filter(val=>val.videos.length>0).length}/${montanaData.length} (${Math.round(stateData.montana)}%)`,
  `Nebraska 0/0 (${Math.round(stateData.nebraska)}%)`,
  `Nevada ${nevadaData.filter(val=>val.videos.length>0).length}/${nevadaData.length} (${Math.round(stateData.nevada)}%)`,
  `New Hampshire ${newHampshireData.filter(val=>val.videos.length>0).length}/${newHampshireData.length} (${Math.round(stateData.newHampshire)}%)`,
  `New Jersey ${newJerseyData.filter(val=>val.videos.length>0).length}/${newJerseyData.length} (${Math.round(stateData.newJersey)}%)`,
  `New Mexico ${newMexicoData.filter(val=>val.videos.length>0).length}/${newMexicoData.length} (${Math.round(stateData.newMexico)}%)`,
  `New York ${newYorkData.filter(val=>val.videos.length>0).length}/${newYorkData.length} (${Math.round(stateData.newYork)}%)`,
  `North Carolina ${northCarolinaData.filter(val=>val.videos.length>0).length}/${northCarolinaData.length} (${Math.round(stateData.northCarolina)}%)`,
  `North Dakota ${northDakotaData.filter(val=>val.videos.length>0).length}/${northDakotaData.length} (${Math.round(stateData.northDakota)}%)`,
  `Ohio ${ohioData.filter(val=>val.videos.length>0).length}/${ohioData.length} (${Math.round(stateData.ohio)}%)`,
  `Oklahoma 0/0 (${Math.round(stateData.oklahoma)}%)`,
  `Oregon ${oregonData.filter(val=>val.videos.length>0).length}/${oregonData.length} (${Math.round(stateData.oregon)}%)`,
  `Pennsylvania ${pennsylvaniaData.filter(val=>val.videos.length>0).length}/${pennsylvaniaData.length} (${Math.round(stateData.pennsylvania)}%)`,
  `Rhode Island ${rhodeIslandData.filter(val=>val.videos.length>0).length}/${rhodeIslandData.length} (${Math.round(stateData.rhodeIsland)}%)`,
  `South Carolina 0/0 (${Math.round(stateData.southCarolina)}%)`,
  `South Dakota ${southDakotaData.filter(val=>val.videos.length>0).length}/${southDakotaData.length} (${Math.round(stateData.southDakota)}%)`,
  `Tennessee ${tennesseeData.filter(val=>val.videos.length>0).length}/${tennesseeData.length} (${Math.round(stateData.tennessee)}%)`,
  `Texas ${texasData.filter(val=>val.videos.length>0).length}/${texasData.length} (${Math.round(stateData.texas)}%)`,
  `Utah ${utahData.filter(val=>val.videos.length>0).length}/${utahData.length} (${Math.round(stateData.utah)}%)`,
  `Vermont ${vermontData.filter(val=>val.videos.length>0).length}/${vermontData.length} (${Math.round(stateData.vermont)}%)`,
  `Virginia ${virginiaData.filter(val=>val.videos.length>0).length}/${virginiaData.length} (${Math.round(stateData.virginia)}%)`,
  `Washington ${washingtonData.filter(val=>val.videos.length>0).length}/${washingtonData.length} (${Math.round(stateData.washington)}%)`,
  `West Virginia ${westVirginiaData.filter(val=>val.videos.length>0).length}/${westVirginiaData.length} (${Math.round(stateData.westVirginia)}%)`,
  `Wisconsin ${wisconsinData.filter(val=>val.videos.length>0).length}/${wisconsinData.length} (${Math.round(stateData.wisconsin)}%)`,
  `Wyoming ${wyomingData.filter(val=>val.videos.length>0).length}/${wyomingData.length} (${Math.round(stateData.wyoming)}%)`,
];
var myVisitedStatePercents = [
    Math.round(stateData.alabama),
    Math.round(stateData.alaska),
    Math.round(stateData.arizona),
    Math.round(stateData.arkansas),
    Math.round(stateData.california),
    Math.round(stateData.colorado),
    Math.round(stateData.connecticut),
    Math.round(stateData.delaware),
    Math.round(stateData.florida),
    Math.round(stateData.georgia),
    Math.round(stateData.hawaii),
    Math.round(stateData.idaho),
    Math.round(stateData.illinois),
    Math.round(stateData.indiana),
    Math.round(stateData.iowa),
    Math.round(stateData.kansas),
    Math.round(stateData.kentucky),
    Math.round(stateData.louisiana),
    Math.round(stateData.maine),
    Math.round(stateData.maryland),
    Math.round(stateData.massachusetts),
    Math.round(stateData.michigan),
    Math.round(stateData.minnesota),
    Math.round(stateData.mississippi),
    Math.round(stateData.missouri),
    Math.round(stateData.montana),
    Math.round(stateData.nebraska),
    Math.round(stateData.nevada),
    Math.round(stateData.newHampshire),
    Math.round(stateData.newJersey),
    Math.round(stateData.newMexico),
    Math.round(stateData.newYork),
    Math.round(stateData.northCarolina),
    Math.round(stateData.northDakota),
    Math.round(stateData.ohio),
    Math.round(stateData.oklahoma),
    Math.round(stateData.oregon),
    Math.round(stateData.pennsylvania),
    Math.round(stateData.rhodeIsland),
    Math.round(stateData.southCarolina),
    Math.round(stateData.southDakota),
    Math.round(stateData.tennessee),
    Math.round(stateData.texas),
    Math.round(stateData.utah),
    Math.round(stateData.vermont),
    Math.round(stateData.virginia),
    Math.round(stateData.washington),
    Math.round(stateData.westVirginia),
    Math.round(stateData.wisconsin),
    Math.round(stateData.wyoming)
];

var visitedStateData = [{
  type: 'choropleth',
  locationmode: 'USA-states',
  locations: myLocations,
  z: myVisitedStatePercents,
  text: myStates,
  zmin: 0,
  zmax: 100,
  autocolorscale: true,
  colorbar: {
      title: '% visited',
  },
  marker: {
      line:{
          color: 'rgb(255,255,255)',
      }
  }
}];

var layout = {
  title: 'Visited Resorts by State',
  geo:{
      scope: 'usa',
      showlakes: true,
      lakecolor: 'rgb(255,255,255)'
  }
};

Plotly.newPlot("StateVisitedHeatMap", visitedStateData, layout, {showLink: false});


// Visited Region Heatmap
var myRegionStates = [
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Alabama
  `West Coast ${westCoastData.filter(val=>val.videos.length>0).length}/${westCoastData.length} (${Math.round(regionData.westCoast)}%)`, // Alaska
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // Arizona
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Arkansas
  `West Coast ${westCoastData.filter(val=>val.videos.length>0).length}/${westCoastData.length} (${Math.round(regionData.westCoast)}%)`, // California
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // Colorado
  `New England ${newEnglandData.filter(val=>val.videos.length>0).length}/${newEnglandData.length} (${Math.round(regionData.newEngland)}%)`, // Connecticut
  `Mid-Atlantic ${midAtlanticData.filter(val=>val.videos.length>0).length}/${midAtlanticData.length} (${Math.round(regionData.midAtlantic)}%)`, // Delaware
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Florida
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Georgia
  `West Coast ${westCoastData.filter(val=>val.videos.length>0).length}/${westCoastData.length} (${Math.round(regionData.westCoast)}%)`, // Hawaii
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // Idaho
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Illinois
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Indiana
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Iowa
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Kansas
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Kentucky
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Louisiana
  `New England ${newEnglandData.filter(val=>val.videos.length>0).length}/${newEnglandData.length} (${Math.round(regionData.newEngland)}%)`, // Maine
  `Mid-Atlantic ${midAtlanticData.filter(val=>val.videos.length>0).length}/${midAtlanticData.length} (${Math.round(regionData.midAtlantic)}%)`, // Maryland
  `New England ${newEnglandData.filter(val=>val.videos.length>0).length}/${newEnglandData.length} (${Math.round(regionData.newEngland)}%)`, // Massachusetts
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Michigan
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Minnesota
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Mississippi
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Missouri
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // Montana
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Nebraska
  `West Coast ${westCoastData.filter(val=>val.videos.length>0).length}/${westCoastData.length} (${Math.round(regionData.westCoast)}%)`, // Nevada
  `New England ${newEnglandData.filter(val=>val.videos.length>0).length}/${newEnglandData.length} (${Math.round(regionData.newEngland)}%)`, // New Hampshire
  `Mid-Atlantic ${midAtlanticData.filter(val=>val.videos.length>0).length}/${midAtlanticData.length} (${Math.round(regionData.midAtlantic)}%)`, // New Jersey
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // New Mexico
  `Mid-Atlantic ${midAtlanticData.filter(val=>val.videos.length>0).length}/${midAtlanticData.length} (${Math.round(regionData.midAtlantic)}%)`, // New York
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // North Carolina
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // North Dakota
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Ohio
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Oklahoma
  `West Coast ${westCoastData.filter(val=>val.videos.length>0).length}/${westCoastData.length} (${Math.round(regionData.westCoast)}%)`, // Oregon
  `Mid-Atlantic ${midAtlanticData.filter(val=>val.videos.length>0).length}/${midAtlanticData.length} (${Math.round(regionData.midAtlantic)}%)`, // Pennsylvania
  `New England ${newEnglandData.filter(val=>val.videos.length>0).length}/${newEnglandData.length} (${Math.round(regionData.newEngland)}%)`, // Rhode Island
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // South Carolina
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // South Dakota
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Tennessee
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Texas
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // Utah
  `New England ${newEnglandData.filter(val=>val.videos.length>0).length}/${newEnglandData.length} (${Math.round(regionData.newEngland)}%)`, // Vermont
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // Virginia
  `West Coast ${westCoastData.filter(val=>val.videos.length>0).length}/${westCoastData.length} (${Math.round(regionData.westCoast)}%)`, // Washington
  `Southeast ${southeastData.filter(val=>val.videos.length>0).length}/${southeastData.length} (${Math.round(regionData.southeast)}%)`, // West Virginia
  `Midwest ${midwestData.filter(val=>val.videos.length>0).length}/${midwestData.length} (${Math.round(regionData.midwest)}%)`, // Wisconsin
  `Rocky Mountains ${rockyMountainData.filter(val=>val.videos.length>0).length}/${rockyMountainData.length} (${Math.round(regionData.rockyMountain)}%)`, // Wyoming
];
var myVisitedRegionStatePercents = [
    Math.round(regionData.southeast),
    Math.round(regionData.westCoast),
    Math.round(regionData.rockyMountain),
    Math.round(regionData.southeast),
    Math.round(regionData.westCoast),
    Math.round(regionData.rockyMountain),
    Math.round(regionData.newEngland),
    Math.round(regionData.midAtlantic),
    Math.round(regionData.southeast),
    Math.round(regionData.southeast),
    Math.round(regionData.westCoast),
    Math.round(regionData.rockyMountain),
    Math.round(regionData.midwest),
    Math.round(regionData.midwest),
    Math.round(regionData.midwest),
    Math.round(regionData.midwest),
    Math.round(regionData.southeast),
    Math.round(regionData.southeast),
    Math.round(regionData.newEngland),
    Math.round(regionData.midAtlantic),
    Math.round(regionData.newEngland),
    Math.round(regionData.midwest),
    Math.round(regionData.midwest),
    Math.round(regionData.southeast),
    Math.round(regionData.midwest),
    Math.round(regionData.rockyMountain),
    Math.round(regionData.midwest),
    Math.round(regionData.westCoast),
    Math.round(regionData.newEngland),
    Math.round(regionData.midAtlantic),
    Math.round(regionData.rockyMountain),
    Math.round(regionData.midAtlantic),
    Math.round(regionData.southeast),
    Math.round(regionData.midwest),
    Math.round(regionData.midwest),
    Math.round(regionData.southeast),
    Math.round(regionData.westCoast),
    Math.round(regionData.midAtlantic),
    Math.round(regionData.newEngland),
    Math.round(regionData.southeast),
    Math.round(regionData.midwest),
    Math.round(regionData.southeast),
    Math.round(regionData.southeast),
    Math.round(regionData.rockyMountain),
    Math.round(regionData.newEngland),
    Math.round(regionData.southeast),
    Math.round(regionData.westCoast),
    Math.round(regionData.southeast),
    Math.round(regionData.midwest),
    Math.round(regionData.rockyMountain),
];

var visitedStateData = [{
  type: 'choropleth',
  locationmode: 'USA-states',
  locations: myLocations,
  z: myVisitedRegionStatePercents,
  text: myRegionStates,
  zmin: 0,
  zmax: 100,
  autocolorscale: true,
  colorbar: {
      title: '% visited',
  },
  marker: {
      line:{
          color: 'rgb(255,255,255)',
      }
  }
}];

var layout = {
  title: 'Visited Resorts by Region',
  geo:{
      scope: 'usa',
      showlakes: true,
      lakecolor: 'rgb(255,255,255)'
  }
};

Plotly.newPlot("RegionVisitedHeatMap", visitedStateData, layout, {showLink: false});


// Days on snow per season
var s1Days = 160;
var s2Days = 72;
var s3Days = 186;
var s4Days = 188;
var s5Days = 144;
var s6Days = 159;
var s7Days = 4;

var daysTotalBySeason = {
  x: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7"],
  y: [s1Days, s2Days, s3Days, s4Days, s5Days, s6Days, s7Days],
  type: 'bar'
};

var daysTotalBySeasonData = [daysTotalBySeason];
// var viewsBySeasonData = [viewsBySeasonTraceAvg, viewsBySeasonTraceMin, viewsBySeasonTraceMax];

var daysTotalBySeasonLayout = {
  title: 'Total Days on Snow by Season',
  yaxis: {
    title: '# Days',
    fixedrange: true
  },
  xaxis: {
    fixedrange: true
  }
};

Plotly.newPlot('daysTotalBySeason', daysTotalBySeasonData, daysTotalBySeasonLayout, config);
