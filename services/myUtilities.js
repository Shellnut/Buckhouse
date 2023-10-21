app.service('myUtilities', function() {
     
     this.urlConfig = {
          // CONTINENT
          "/continent/africa": {
               data: lesothoData.concat(moroccoData).concat(southAfricaData),
               center: {
                    lat: 2.7179353846552132, 
                    lng: 23.613153987859246,
                    zoom: 3
               },
               title: "continent of Africa"
          },
          "/continent/asia": {
               data: armeniaData.concat(azerbaijanData).concat(chinaData).concat(georgiaData).concat(indiaData).concat(iranData).concat(israelData).concat(japanData).concat(kazakhstanData).concat(kyrgyzstanData).concat(mongoliaData).concat(montenegroData).concat(northKoreaData).concat(pakistanData).concat(russiaData).concat(southKoreaData).concat(tajikistanData).concat(turkeyData).concat(uzbekistanData),
               center: {
                    lat: 52.42482764623034,
                    lng: 90.03815171953174,
                    zoom: 2
               },
               title: "contienent of Asia"
          },
          "/continent/europe": {
               data: andorraData.concat(austriaData).concat(belgiumData).concat(bosniaAndHerzegovinaData).concat(bulgariaData).concat(croatiaData).concat(cyprusData).concat(czechRepublicData).concat(denmarkData).concat(finlandData).concat(franceData).concat(germanyData).concat(greeceData).concat(hungaryData).concat(icelandData).concat(irelandData).concat(italyData).concat(kosovoData).concat(latviaData).concat(liechtensteinData).concat(lithuaniaData).concat(netherlandsData).concat(norwayData).concat(polandData).concat(portugalData).concat(romaniaData).concat(serbiaData).concat(slovakiaData).concat(sloveniaData).concat(spainData).concat(swedenData).concat(switzerlandData).concat(ukraineData).concat(unitedKingdomData),
               center: {
                    lat: 48.73312991608227,
                    lng: 16.982817814574176,
                    zoom: 3
               },
               title: "contienent of Europe"
          },
          "/continent/northamerica": {
               data: unitedStatesData.concat(canadaData).concat(greenlandData),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "continent of North America"
          },
          "/continent/oceania": {
               data: australiaData.concat(newZealandData),
               center: {
                    lat: -30.579420815325587,
                    lng: 147.1036969414915,
                    zoom: 3
               },
               title: "contienent of Oceania"
          },
          "/continent/southamerica": {
               data: argentinaData.concat(brazilData).concat(chileData),
               center: {
                    lat: -16.74212789301476,
                    lng: -58.33130393815825,
                    zoom: 3
               },
               title: "continent of South America"
          },
          // GLOBAL
          "/continent/global": {
               data: globalData,
               center: {
                    lat: 40.501453255834775,
                    lng: -10.331946751509854,
                    zoom: 1
               },
               title: "global"
          },
          // COUNTRY - AFRICA
          "/country/lesotho": {
               data: lesothoData,
               center: {
                    lat: -29.52839881824715,
                    lng: 28.19482593030441,
                    zoom: 7
               },
               title: "country of Lesotho"
          },
          "/country/morocco": {
               data: moroccoData,
               center: {
                    lat: 32.83527477061973,
                    lng: -5.973065861449475,
                    zoom: 7
               },
               title: "country of Morocco"
          },
          "/country/southafrica": {
               data: southAfricaData,
               center: {
                    lat: -29.428064311906823,
                    lng: 25.40182518614506,
                    zoom: 7
               },
               title: "country of South Africa"
          },
          // COUNTRY - ASIA
          "/country/armenia": {
               data: armeniaData,
               center: {
                    lat: 40.069099,
                    lng: 45.038189,
                    zoom: 3
               },
               title: "country of Armenia"
          },
          "/country/azerbaijan": {
               data: azerbaijanData,
               center: {
                    lat: 40.36516278866422, 
                    lng: 44.90271008781116,
                    zoom: 7
               },
               title: "country of Azerbaijan"
          },
          "/country/china": {
               data: chinaData,
               center: {
                    lat: 34.64541848657856,
                    lng: 103.0576166563764,
                    zoom: 4
               },
               title: "country of China"
          },
          "/country/georgia": {
               data: georgiaData,
               center: {
                    lat: 42.03128031417921,
                    lng: 43.06532062933643,
                    zoom: 7
               },
               title: "country of Georgia"
          },
          "/country/india": {
               data: indiaData,
               center: {
                    lat: 22.279912968243853, 
                    lng: 78.57279136069386,
                    zoom: 4
               },
               title: "country of India"
          },
          "/country/iran": {
               data: iranData,
               center: {
                    lat: 34.29734115872708,
                    lng: 50.48347534346263,
                    zoom: 5
               },
               title: "country of Iran"
          },
          "/country/israel": {
               data: israelData,
               center: {
                    lat: 31.763443232315915,
                    lng: 35.29797039154392,
                    zoom: 5
               },
               title: "country of Israel"
          },
          "/country/japan": {
               data: japanData,
               center: {
                    lat: 38.360873333973885, 
                    lng:  140.26131726527188,
                    zoom: 5
               },
               title: "country of Japan"
          },
          "/country/kazakhstan": {
               data: kazakhstanData,
               center: {
                    lat: 48.63487435792,
                    lng: 67.0773315494498,
                    zoom: 5
               },
               title: "country of Kazakhstan"
          },
          "/country/kyrgyzstan": {
               data: kyrgyzstanData,
               center: {
                    lat: 41.20438,
                    lng: 74.766098,
                    zoom: 3
               },
               title: "country of Kyrgyzstan"
          },
          "/country/mongolia": {
               data: mongoliaData,
               center: {
                    lat: 46.862496,
                    lng: 103.846656,
                    zoom: 3
               },
               title: "country of Mongolia"
          },
          "/country/montenegro": {
               data: montenegroData,
               center: {
                    lat: 42.708678,
                    lng: 19.37439,
                    zoom: 3
               },
               title: "country of Montenegro"
          },
          "/country/northKorea": {
               data: northKoreaData,
               center: {
                    lat: 39.06175327936455,
                    lng: 127.25131482263191,
                    zoom: 3
               },
               title: "country of North Korea"
          },
          "/country/pakistan": {
               data: pakistanData,
               center: {
                    lat: 30.375321,
                    lng: 69.345116,
                    zoom: 3
               },
               title: "country of pakistan"
          },
          "/country/russia": {
               data: russiaData,
               center: {
                    lat: 61.52401,
                    lng: 105.318756,
                    zoom: 3
               },
               title: "country of russia"
          },
          "/country/southKorea": {
               data: southKoreaData,
               center: {
                    lat: 37.64421304570736,
                    lng: 127.68187847137438,
                    zoom: 3
               },
               title: "country of southKorea"
          },
          "/country/tajikistan": {
               data: tajikistanData,
               center: {
                    lat: 38.861034,
                    lng: 71.276093,
                    zoom: 3
               },
               title: "country of tajikistan"
          },
          "/country/turkey": {
               data: turkeyData,
               center: {
                    lat: 38.963745,
                    lng: 35.243322,
                    zoom: 3
               },
               title: "country of turkey"
          },
          "/country/uzbekistan": {
               data: uzbekistanData,
               center: {
                    lat: 41.377491,
                    lng: 64.585262,
                    zoom: 3
               },
               title: "country of uzbekistan"
          },
          // COUNTRY - EUROPE
          "/country/andorra": {
               data: andorraData,
               center: {
                    lat: 42.546245,
                    lng: 1.601554,
                    zoom: 3
               },
               title: "country of andorra"
          },
          "/country/austria": {
               data: austriaData,
               center: {
                    lat: 47.516231,
                    lng: 14.550072,
                    zoom: 3
               },
               title: "country of austria"
          },
          "/country/belgium": {
               data: belgiumData,
               center: {
                    lat: 50.503887,
                    lng: 4.469936,
                    zoom: 3
               },
               title: "country of belgium"
          },
          "/country/bosniaandherzego": {
               data: bosniaAndHerzegovinaData,
               center: {
                    lat: 44.11399816756695,
                    lng: 17.8094089684423,
                    zoom: 3
               },
               title: "country of Bosnia and Herzego"
          },
          "/country/bulgaria": {
               data: bulgariaData,
               center: {
                    lat: 42.632998720136804, 
                    lng: 25.224008524673646,
                    zoom: 3
               },
               title: "country of Bulgaria"
          },
          "/country/croatia": {
               data: croatiaData,
               center: {
                    lat: 45.1,
                    lng: 15.2,
                    zoom: 3
               },
               title: "country of Croatia"
          },
          "/country/cyprus": {
               data: cyprusData,
               center: {
                    lat: 35.126413,
                    lng: 33.429859,
                    zoom: 3
               },
               title: "country of Cyprus"
          },
          "/country/czechRepublic": {
               data: czechRepublicData,
               center: {
                    lat: 49.838004154819785,
                    lng:  15.408533061759199,
                    zoom: 3
               },
               title: "country of Czech Republic"
          },
          "/country/denmark": {
               data: denmarkData,
               center: {
                    lat: 55.950623220501576,
                    lng:  9.420924430337822,
                    zoom: 3
               },
               title: "country of Denmark"
          },
          "/country/finland": {
               data: finlandData,
               center: {
                    lat: 61.92411,
                    lng: 25.748151,
                    zoom: 3
               },
               title: "country of Finland"
          },
          "/country/france": {
               data: franceData,
               center: {
                    lat: 46.227638,
                    lng: 2.213749,
                    zoom: 6
               },
               title: "country of France"
          },
          "/country/germany": {
               data: germanyData,
               center: {
                    lat: 49.82554310798461,
                    lng: 10.098825190382339,
                    zoom: 6
               },
               title: "country of Germany"
          },
          "/country/greece": {
               data: greeceData,
               center: {
                    lat: 39.074208,
                    lng: 21.824312,
                    zoom: 3
               },
               title: "country of Greece"
          },
          "/country/hungary": {
               data: hungaryData,
               center: {
                    lat: 47.162494,
                    lng: 19.503304,
                    zoom: 3
               },
               title: "country of Hungary"
          },
          "/country/iceland": {
               data: icelandData,
               center: {
                    lat: 64.963051,
                    lng: -19.020835,
                    zoom: 3
               },
               title: "country of Iceland"
          },
          "/country/ireland": {
               data: irelandData,
               center: {
                    lat: 53.41291,
                    lng: -8.24389,
                    zoom: 3
               },
               title: "country of Ireland"
          },
          "/country/italy": {
               data: italyData,
               center: {
                    lat: 41.87194,
                    lng: 12.56738,
                    zoom: 3
               },
               title: "country of Italy"
          },
          "/country/kosovo": {
               data: kosovoData,
               center: {
                    lat: 42.602636,
                    lng: 20.902977,
                    zoom: 3
               },
               title: "country of Kosovo"
          },
          "/country/latvia": {
               data: latviaData,
               center: {
                    lat: 56.879635,
                    lng: 24.603189,
                    zoom: 3
               },
               title: "country of Latvia"
          },
          "/country/liechtenstein": {
               data: liechtensteinData,
               center: {
                    lat: 47.166,
                    lng: 9.555373,
                    zoom: 3
               },
               title: "country of Liechtenstein"
          },
          "/country/lithuania": {
               data: lithuaniaData,
               center: {
                    lat: 55.169438,
                    lng: 23.881275,
                    zoom: 3
               },
               title: "country of Lithuania"
          },
          "/country/netherlands": {
               data: netherlandsData,
               center: {
                    lat: 52.132633,
                    lng: 5.291266,
                    zoom: 3
               },
               title: "country of Netherlands"
          },
          "/country/norway": {
               data: norwayData,
               center: {
                    lat: 60.472024,
                    lng: 8.468946,
                    zoom: 3
               },
               title: "country of Norway"
          },
          "/country/poland": {
               data: polandData,
               center: {
                    lat: 51.919438,
                    lng: 19.145136,
                    zoom: 3
               },
               title: "country of Poland"
          },
          "/country/portugal": {
               data: portugalData,
               center: {
                    lat: 39.399872,
                    lng: -8.224454,
                    zoom: 3
               },
               title: "country of Portugal"
          },
          "/country/romania": {
               data: romaniaData,
               center: {
                    lat: 45.943161,
                    lng: 24.96676,
                    zoom: 3
               },
               title: "country of Romania"
          },
          "/country/serbia": {
               data: serbiaData,
               center: {
                    lat: 44.016521,
                    lng: 21.005859,
                    zoom: 3
               },
               title: "country of Serbia"
          },
          "/country/slovakia": {
               data: slovakiaData,
               center: {
                    lat: 48.669026,
                    lng: 19.699024,
                    zoom: 3
               },
               title: "country of Slovakia"
          },
          "/country/slovenia": {
               data: sloveniaData,
               center: {
                    lat: 46.151241,
                    lng: 14.995463,
                    zoom: 3
               },
               title: "country of Slovenia"
          },
          "/country/spain": {
               data: spainData,
               center: {
                    lat: 40.463667,
                    lng: -3.74922,
                    zoom: 3
               },
               title: "country of Spain"
          },
          "/country/sweden": {
               data: swedenData,
               center: {
                    lat: 60.128161,
                    lng: 18.643501,
                    zoom: 3
               },
               title: "country of Sweden"
          },
          "/country/switzerland": {
               data: switzerlandData,
               center: {
                    lat: 46.818188,
                    lng: 8.227512,
                    zoom: 3
               },
               title: "country of Switzerland"
          },
          "/country/ukraine": {
               data: ukraineData,
               center: {
                    lat: 48.379433,
                    lng: 31.16558,
                    zoom: 3
               },
               title: "country of Ukraine"
          },
          "/country/unitedkingdom": {
               data: unitedKingdomData,
               center: {
                    lat: 55.378051,
                    lng: -3.435973,
                    zoom: 3
               },
               title: "country of United Kingdom"
          },
          // COUNTRY - NORTH AMERICA
          "/country/canada": {
               data: canadaData,
               center: {
                    lat: 56.130366,
                    lng: -106.346771,
                    zoom: 3
               },
               title: "country of Canada"
          },
          "/country/greenland": {
               data: greenlandData,
               center: {
                    lat: 71.706936,
                    lng: -42.604303,
                    zoom: 3
               },
               title: "country of Greenland"
          },
          "/country/unitedstates": {
               data: unitedStatesData,
               center: {
                    lat: 37.09024,
                    lng: -95.712891,
                    zoom: 3
               },
               title: "country of the United States"
          },
          // COUNTRY - OCEANIA
          "/country/australia": {
               data: australiaData,
               center: {
                    lat: -26.7124597495182,
                    lng: 135.0062277593736,
                    zoom: 3
               },
               title: "country of Australia" 
          },
          "/country/newzealand": {
               data: newZealandData,
               center: {
                    lat: -42.20395491641805,
                    lng: 173.5438749106739,
                    zoom: 3
               },
               title: "country of New Zealand" 
          },
          // SOUTH AMERICA
          "/country/argentina": {
               data: argentinaData,
               center: {
                    lat: -38.416097,
                    lng: -63.616672,
                    zoom: 3
               },
               title: "country of Argentina"
          },
          "/country/brazil": {
               data: brazilData,
               center: {
                    lat: -14.235004,
                    lng: -51.92528,
                    zoom: 3
               },
               title: "country of Brazil"
          },
          "/country/chile": {
               data: chileData,
               center: {
                    lat: -35.675147,
                    lng: -71.542969,
                    zoom: 3
               },
               title: "country of Chile"
          },
          // STATUS OF JB
          "/status/reviewed": {
               data: globalData.filter(val => val.resortReview.score),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "resorts that he has reviewed"
          },
          "/status/notreviewed": {
               data: unitedStatesData.filter(val => !val.resortReview.score),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "resorts that he has not reviewed"
          },
          "/status/visited": {
               data: globalData.filter(val => val.videos.length > 0),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "resorts that he has visited"
          },
          "/status/notvisited": {
               data: unitedStatesData.filter(val => val.videos.length < 1),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "resorts that he has not visited"
          },
          // PASSES
          "/pass/epic": {
               data: globalData.filter(val => val.skiPass.includes('Epic')),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "Epic ski pass"
          },
          "/pass/ikon": {
               data: globalData.filter(val => val.skiPass.includes('Ikon')),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "Ikon ski pass"
          },
          "/pass/mountaincollective": {
               data: globalData.filter(val => val.skiPass.includes('Mountain Collective')),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "Mountain Collective ski pass"
          },
          "/pass/indy": {
               data: globalData.filter(val => val.skiPass.includes('Indy')),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "Indy ski pass"
          },
          "/pass/powderalliance": {
               data: globalData.filter(val => val.skiPass.includes('Powder Alliance')),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "Powder Alliance ski pass"
          },
          "/pass/nopassassociated": {
               data: unitedStatesData.filter(val => val.skiPass.length === 0),
               center: {
                    lat: 39.485156977729474, 
                    lng: -106.05312809324181,
                    zoom: 3
               },
               title: "no pass associated"
          },
     };
     
     this.countriesWithFlags = [
          {
               "path": "continent/northamerica",
               "text": "North America",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/220px-Location_North_America.svg.png"
          },
          {
               "path": "/continent/africa",
               "text": "Africa",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/220px-Africa_%28orthographic_projection%29.svg.png"
          },
          {
               "path": "/continent/asia",
               "text": "Asia",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png"
          },
          {
               "path": "/continent/europe",
               "text": "Europe",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png"
          },
          {
               "path": "/continent/oceania",
               "text": "Oceania",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Oceania_%28centered_orthographic_projection%29.svg/200px-Oceania_%28centered_orthographic_projection%29.svg.png"
          },
          {
               "path": "/continent/southamerica",
               "text": "South America",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/220px-South_America_%28orthographic_projection%29.svg.png"
          },
          {
               "path": "/continent/global",
               "text": "Global - Warning!! Slow",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/220px-The_Blue_Marble_%28remastered%29.jpg"
          },
          {
               "path": "/country/unitedstates",
               "text": "United States",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/United_States.jpg"
          },
          {
               "path": "/country/canada",
               "text": "Canada",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Canada.jpg"
          },
          {
               "path": "/country/france",
               "text": "France",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/France.jpg"
          },
          {
               "path": "/country/japan",
               "text": "Japan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Japan.jpg"
          },
          {
               "path": "/country/lesotho",
               "text": "Lesotho",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Lesotho.jpg"
          },
          {
               "path": "/country/morocco",
               "text": "Morocco",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Morocco.jpg"
          },
          {
               "path": "/country/southafrica",
               "text": "South Africa",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/South_Africa.jpg"
          },
          {
               "path": "/country/armenia",
               "text": "Armenia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Armenia.jpg"
          },
          {
               "path": "/country/azerbaijan",
               "text": "Azerbaijan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Azerbaijan.jpg"
          },
          {
               "path": "/country/china",
               "text": "China",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/China.jpg"
          },
          {
               "path": "/country/georgia",
               "text": "Georgia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Georgia.jpg"
          },
          {
               "path": "/country/india",
               "text": "India",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/India.jpg"
          },
          {
               "path": "/country/iran",
               "text": "Iran",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Iran.jpg"
          },
          {
               "path": "/country/israel",
               "text": "Israel",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Israel.jpg"
          },
          {
               "path": "/country/kazakhstan",
               "text": "Kazakhstan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Kazakhstan.jpg"
          },
          {
               "path": "/country/kyrgyzstan",
               "text": "Kyrgyzstan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Kyrgyzstan.jpg"
          },
          {
               "path": "/country/mongolia",
               "text": "Mongolia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Mongolia.jpg"
          },
          {
               "path": "/country/montenegro",
               "text": "Montenegro",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Montenegro.jpg"
          },
          {
               "path": "/country/northKorea",
               "text": "North Korea",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/North_Korea.jpg"
          },
          {
               "path": "/country/pakistan",
               "text": "Pakistan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Pakistan.jpg"
          },
          {
               "path": "/country/russia",
               "text": "Russia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Russia.jpg"
          },
          {
               "path": "/country/southKorea",
               "text": "South Korea",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/South_Korea.jpg"
          },
          {
               "path": "/country/tajikistan",
               "text": "Tajikistan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Tajikistan.jpg"
          },
          {
               "path": "/country/turkey",
               "text": "Turkey",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Turkey.jpg"
          },
          {
               "path": "/country/uzbekistan",
               "text": "Uzbekistan",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Uzbekistan.jpg"
          },
          {
               "path": "/country/andorra",
               "text": "Andorra",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Andorra.jpg"
          },
          {
               "path": "/country/austria",
               "text": "Austria",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Austria.jpg"
          },
          {
               "path": "/country/belgium",
               "text": "Belgium",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Belgium.jpg"
          },
          {
               "path": "/country/bosniaandherzego",
               "text": "Bosnia and Herzegovina",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Bosnia_and_Herzegovina.jpg"
          },
          {
               "path": "/country/bulgaria",
               "text": "Bulgaria",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Bulgaria.jpg"
          },
          {
               "path": "/country/croatia",
               "text": "Croatia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Croatia.jpg"
          },
          {
               "path": "/country/cyprus",
               "text": "Cyprus",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Cyprus.jpg"
          },
          {
               "path": "/country/czechRepublic",
               "text": "Czech Republic",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Czech_Republic.jpg"
          },
          {
               "path": "/country/denmark",
               "text": "Denmark",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Denmark.jpg"
          },
          {
               "path": "/country/finland",
               "text": "Finland",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Finland.jpg"
          },
          {
               "path": "/country/germany",
               "text": "Germany",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Germany.jpg"
          },
          {
               "path": "/country/greece",
               "text": "Greece",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Greece.jpg"
          },
          {
               "path": "/country/hungary",
               "text": "Hungary",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Hungary.jpg"
          },
          {
               "path": "/country/iceland",
               "text": "Iceland",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Iceland.jpg"
          },
          {
               "path": "/country/ireland",
               "text": "Ireland",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Ireland.jpg"
          },
          {
               "path": "/country/italy",
               "text": "Italy",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Italy.jpg"
          },
          {
               "path": "/country/kosovo",
               "text": "Kosovo",
               "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/238px-Flag_of_Kosovo.svg.jpg"
          },
          {
               "path": "/country/latvia",
               "text": "Latvia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Latvia.jpg"
          },
          {
               "path": "/country/liechtenstein",
               "text": "Liechtenstein",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Liechtenstein.jpg"
          },
          {
               "path": "/country/lithuania",
               "text": "Lithuania",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Lithuania.jpg"
          },
          {
               "path": "/country/netherlands",
               "text": "Netherlands",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Netherlands.jpg"
          },
          {
               "path": "/country/norway",
               "text": "Norway",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Norway.jpg"
          },
          {
               "path": "/country/poland",
               "text": "Poland",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Poland.jpg"
          },
          {
               "path": "/country/portugal",
               "text": "Portugal",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Portugal.jpg"
          },
          {
               "path": "/country/romania",
               "text": "Romania",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Romania.jpg"
          },
          {
               "path": "/country/serbia",
               "text": "Serbia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Serbia.jpg"
          },
          {
               "path": "/country/slovakia",
               "text": "Slovakia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Slovakia.jpg"
          },
          {
               "path": "/country/slovenia",
               "text": "Slovenia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Slovenia.jpg"
          },
          {
               "path": "/country/spain",
               "text": "Spain",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Spain.jpg"
          },
          {
               "path": "/country/sweden",
               "text": "Sweden",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Sweden.jpg"
          },
          {
               "path": "/country/switzerland",
               "text": "Switzerland",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Switzerland.jpg"
          },
          {
               "path": "/country/ukraine",
               "text": "Ukraine",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Ukraine.jpg"
          },
          {
               "path": "/country/unitedkingdom",
               "text": "United Kingdom",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/United_Kingdom.jpg"
          },
          {
               "path": "/country/greenland",
               "text": "Greenland",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Greenland.jpg"
          },
          {
               "path": "/country/australia",
               "text": "Australia",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Australia.jpg"
          },
          {
               "path": "/country/newzealand",
               "text": "New Zealand",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/New_Zealand.jpg"
          },
          {
               "path": "/country/argentina",
               "text": "Argentina",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Argentina.jpg"
          },
          {
               "path": "/country/brazil",
               "text": "Brazil",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Brazil.jpg"
          },
          {
               "path": "/country/chile",
               "text": "Chile",
               "flag": "https://www.sciencekids.co.nz/images/pictures/flags120/Chile.jpg"
          }
     ];
     
})