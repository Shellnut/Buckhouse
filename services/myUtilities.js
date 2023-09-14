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
             title: "Africa"
        },
        "/continent/asia": {
             data: armeniaData.concat(azerbaijanData).concat(chinaData).concat(georgiaData).concat(indiaData).concat(iranData).concat(israelData).concat(japanData).concat(kazakhstanData).concat(kyrgyzstanData).concat(mongoliaData).concat(montenegroData).concat(northKoreaData).concat(pakistanData).concat(russiaData).concat(southKoreaData).concat(tajikistanData).concat(turkeyData).concat(uzbekistanData),
             center: {
                lat: 52.42482764623034,
                lng: 90.03815171953174,
                zoom: 2
             },
             title: "Asia"
        },
        "/continent/europe": {
             data: andorraData.concat(austriaData).concat(belgiumData).concat(bosniaAndHerzegovinaData).concat(bulgariaData).concat(croatiaData).concat(cyprusData).concat(czechRepublicData).concat(denmarkData).concat(finlandData).concat(franceData).concat(germanyData).concat(greeceData).concat(hungaryData).concat(icelandData).concat(irelandData).concat(italyData).concat(kosovoData).concat(latviaData).concat(liechtensteinData).concat(lithuaniaData).concat(netherlandsData).concat(norwayData).concat(polandData).concat(portugalData).concat(romaniaData).concat(serbiaData).concat(slovakiaData).concat(sloveniaData).concat(spainData).concat(swedenData).concat(switzerlandData).concat(ukraineData).concat(unitedKingdomData),
             center: {
                lat: 48.73312991608227,
                lng: 16.982817814574176,
                zoom: 3
             },
             title: "/continent/europe"
        },
        "/continent/northamerica": {
             data: unitedStatesData.concat(canadaData).concat(greenlandData),
             center: {
                lat: 39.485156977729474, 
                lng: -106.05312809324181,
                zoom: 3
             },
             title: "/continent/northamerica"
        },
        "/continent/oceania": {
             data: australiaData.concat(newZealandData),
             center: {
                lat: -30.579420815325587,
                lng: 147.1036969414915,
                zoom: 3
             },
             title: "/continent/oceania"
        },
        "/continent/southamerica": {
             data: argentinaData.concat(brazilData).concat(chileData),
             center: {
                lat: -16.74212789301476,
                lng: -58.33130393815825,
                zoom: 3
             },
             title: "/continent/southamerica"
        },
        // COUNTRY - AFRICA
        "/country/lesotho": {
             data: lesothoData,
             center: {
                lat: -29.52839881824715,
                lng: 28.19482593030441,
                zoom: 7
             },
             title: "/country/lesotho"
        },
        "/country/morocco": {
             data: moroccoData,
             center: {
                lat: 32.83527477061973,
                lng: -5.973065861449475,
                zoom: 7
             },
             title: "/country/morocco"
        },
        "/country/southafrica": {
             data: southAfricaData,
             center: {
                lat: -29.428064311906823,
                lng: 25.40182518614506,
                zoom: 7
             },
             title: "/country/southafrica"
        },
        // COUNTRY - ASIA
        "/country/armenia": {
             data: armeniaData,
             center: {
                lat: 40.069099,
                lng: 45.038189,
                zoom: 3
             },
             title: "/country/armenia"
        },
        "/country/azerbaijan": {
             data: azerbaijanData,
             center: {
                lat: 40.36516278866422, 
                lng: 44.90271008781116,
                zoom: 7
             },
             title: "/country/azerbaijan"
        },
        "/country/china": {
             data: chinaData,
             center: {
                lat: 34.64541848657856,
                lng: 103.0576166563764,
                zoom: 4
             },
             title: "/country/china"
        },
        "/country/georgia": {
             data: georgiaData,
             center: {
                lat: 42.03128031417921,
                lng: 43.06532062933643,
                zoom: 7
             },
             title: "/country/georgia"
        },
        "/country/india": {
             data: indiaData,
             center: {
                lat: 22.279912968243853, 
                lng: 78.57279136069386,
                zoom: 4
             },
             title: "/country/india"
        },
        "/country/iran": {
             data: iranData,
             center: {
                lat: 34.29734115872708,
                lng: 50.48347534346263,
                zoom: 5
             },
             title: "/country/iran"
        },
        "/country/israel": {
             data: israelData,
             center: {
                lat: 31.763443232315915,
                lng: 35.29797039154392,
                zoom: 5
             },
             title: "/country/israel"
        },
        "/country/japan": {
             data: japanData,
             center: {
                lat: 38.360873333973885, 
                lng:  140.26131726527188,
                zoom: 5
             },
             title: "/country/japan"
        },
        "/country/kazakhstan": {
             data: kazakhstanData,
             center: {
                lat: 48.63487435792,
                lng: 67.0773315494498,
                zoom: 5
             },
             title: "/country/kazakhstan"
        },
        "/country/kyrgyzstan": {
             data: kyrgyzstanData,
             center: {
                lat: 41.20438,
                lng: 74.766098,
                zoom: 3
             },
             title: "/country/kyrgyzstan"
        },
        "/country/mongolia": {
             data: mongoliaData,
             center: {
                lat: 46.862496,
                lng: 103.846656,
                zoom: 3
             },
             title: "/country/mongolia"
        },
        "/country/montenegro": {
             data: montenegroData,
             center: {
                lat: 42.708678,
                lng: 19.37439,
                zoom: 3
             },
             title: "/country/montenegro"
        },
        "/country/northKorea": {
             data: northKoreaData,
             center: {
                lat: 39.06175327936455,
                lng: 127.25131482263191,
                zoom: 3
             },
             title: "/country/northKorea"
        },
        "/country/pakistan": {
             data: pakistanData,
             center: {
                lat: 30.375321,
                lng: 69.345116,
                zoom: 3
             },
             title: "/country/pakistan"
        },
        "/country/russia": {
             data: russiaData,
             center: {
                lat: 61.52401,
                lng: 105.318756,
                zoom: 3
             },
             title: "/country/russia"
        },
        "/country/southKorea": {
             data: southKoreaData,
             center: {
                lat: 37.64421304570736,
                lng: 127.68187847137438,
                zoom: 3
             },
             title: "/country/southKorea"
        },
        "/country/tajikistan": {
             data: tajikistanData,
             center: {
                lat: 38.861034,
                lng: 71.276093,
                zoom: 3
             },
             title: "/country/tajikistan"
        },
        "/country/turkey": {
             data: turkeyData,
             center: {
                lat: 38.963745,
                lng: 35.243322,
                zoom: 3
             },
             title: "/country/turkey"
        },
        "/country/uzbekistan": {
             data: uzbekistanData,
             center: {
                lat: 41.377491,
                lng: 64.585262,
                zoom: 3
             },
             title: "/country/uzbekistan"
        },
        // COUNTRY - EUROPE
        "/country/andorra": {
             data: andorraData,
             center: {
                lat: 42.546245,
                lng: 1.601554,
                zoom: 3
             },
             title: "/country/andorra"
        },
        "/country/austria": {
             data: austriaData,
             center: {
                lat: 47.516231,
                lng: 14.550072,
                zoom: 3
             },
             title: "/country/austria"
        },
        "/country/belgium": {
             data: belgiumData,
             center: {
                lat: 50.503887,
                lng: 4.469936,
                zoom: 3
             },
             title: "/country/belgium"
        },
        "/country/bosniaandherzego": {
             data: bosniaAndHerzegovinaData,
             center: {
                lat: 44.11399816756695,
                lng: 17.8094089684423,
                zoom: 3
             },
             title: "/country/bosniaandherzego"
        },
        "/country/bulgaria": {
             data: bulgariaData,
             center: {
                lat: 42.632998720136804, 
                lng: 25.224008524673646,
                zoom: 3
             },
             title: "/country/bulgaria"
        },
        "/country/croatia": {
             data: croatiaData,
             center: {
                lat: 45.1,
                lng: 15.2,
                zoom: 3
             },
             title: "/country/croatia"
        },
        "/country/cyprus": {
             data: cyprusData,
             center: {
                lat: 35.126413,
                lng: 33.429859,
                zoom: 3
             },
             title: "/country/cyprus"
        },
        "/country/czechRepublic": {
             data: czechRepublicData,
             center: {
                lat: 49.838004154819785,
                lng:  15.408533061759199,
                zoom: 3
             },
             title: "/country/czechRepublic"
        },
        "/country/denmark": {
             data: denmarkData,
             center: {
                lat: 55.950623220501576,
                lng:  9.420924430337822,
                zoom: 3
             },
             title: "/country/denmark"
        },
        "/country/finland": {
             data: finlandData,
             center: {
                lat: 61.92411,
                lng: 25.748151,
                zoom: 3
             },
             title: "/country/finland"
        },
        "/country/france": {
             data: franceData,
             center: {
                lat: 46.227638,
                lng: 2.213749,
                zoom: 6
             },
             title: "/country/france"
        },
        "/country/germany": {
             data: germanyData,
             center: {
                lat: 49.82554310798461,
                lng: 10.098825190382339,
                zoom: 6
             },
             title: "/country/germany"
        },
        "/country/greece": {
             data: greeceData,
             center: {
                lat: 39.074208,
                lng: 21.824312,
                zoom: 3
             },
             title: "/country/greece"
        },
        "/country/hungary": {
             data: hungaryData,
             center: {
                lat: 47.162494,
                lng: 19.503304,
                zoom: 3
             },
             title: "/country/hungary"
        },
        "/country/iceland": {
             data: icelandData,
             center: {
                lat: 64.963051,
                lng: -19.020835,
                zoom: 3
             },
             title: "/country/iceland"
        },
        "/country/ireland": {
             data: irelandData,
             center: {
                lat: 53.41291,
                lng: -8.24389,
                zoom: 3
             },
             title: "/country/ireland"
        },
        "/country/italy": {
             data: italyData,
             center: {
                lat: 41.87194,
                lng: 12.56738,
                zoom: 3
             },
             title: "/country/italy"
        },
        "/country/kosovo": {
             data: kosovoData,
             center: {
                lat: 42.602636,
                lng: 20.902977,
                zoom: 3
             },
             title: "/country/kosovo"
        },
        "/country/latvia": {
             data: latviaData,
             center: {
                lat: 56.879635,
                lng: 24.603189,
                zoom: 3
             },
             title: "/country/latvia"
        },
        "/country/liechtenstein": {
             data: liechtensteinData,
             center: {
                lat: 47.166,
                lng: 9.555373,
                zoom: 3
             },
             title: "/country/liechtenstein"
        },
        "/country/lithuania": {
             data: lithuaniaData,
             center: {
                lat: 55.169438,
                lng: 23.881275,
                zoom: 3
             },
             title: "/country/lithuania"
        },
        "/country/netherlands": {
             data: netherlandsData,
             center: {
                lat: 52.132633,
                lng: 5.291266,
                zoom: 3
             },
             title: "/country/netherlands"
        },
        "/country/norway": {
             data: norwayData,
             center: {
                lat: 60.472024,
                lng: 8.468946,
                zoom: 3
             },
             title: "/country/norway"
        },
        "/country/poland": {
             data: polandData,
             center: {
                lat: 51.919438,
                lng: 19.145136,
                zoom: 3
             },
             title: "/country/poland"
        },
        "/country/portugal": {
             data: portugalData,
             center: {
                lat: 39.399872,
                lng: -8.224454,
                zoom: 3
             },
             title: "/country/portugal"
        },
        "/country/romania": {
             data: romaniaData,
             center: {
                lat: 45.943161,
                lng: 24.96676,
                zoom: 3
             },
             title: "/country/romania"
        },
        "/country/serbia": {
             data: serbiaData,
             center: {
                lat: 44.016521,
                lng: 21.005859,
                zoom: 3
             },
             title: "/country/serbia"
        },
        "/country/slovakia": {
             data: slovakiaData,
             center: {
                lat: 48.669026,
                lng: 19.699024,
                zoom: 3
             },
             title: "/country/slovakia"
        },
        "/country/slovenia": {
             data: sloveniaData,
             center: {
                lat: 46.151241,
                lng: 14.995463,
                zoom: 3
             },
             title: "/country/slovenia"
        },
        "/country/spain": {
             data: spainData,
             center: {
                lat: 40.463667,
                lng: -3.74922,
                zoom: 3
             },
             title: "/country/spain"
        },
        "/country/sweden": {
             data: swedenData,
             center: {
                lat: 60.128161,
                lng: 18.643501,
                zoom: 3
             },
             title: "/country/sweden"
        },
        "/country/switzerland": {
             data: switzerlandData,
             center: {
                lat: 46.818188,
                lng: 8.227512,
                zoom: 3
             },
             title: "/country/switzerland"
        },
        "/country/ukraine": {
             data: ukraineData,
             center: {
                lat: 48.379433,
                lng: 31.16558,
                zoom: 3
             },
             title: "/country/ukraine"
        },
        "/country/unitedkingdom": {
             data: unitedKingdomData,
             center: {
                lat: 55.378051,
                lng: -3.435973,
                zoom: 3
             },
             title: "/country/unitedkingdom"
        },
        // COUNTRY - NORTH AMERICA
        "/country/canada": {
             data: canadaData,
             center: {
                lat: 56.130366,
                lng: -106.346771,
                zoom: 3
             },
             title: "/country/canada"
        },
        "/country/greenland": {
             data: greenlandData,
             center: {
                lat: 71.706936,
                lng: -42.604303,
                zoom: 3
             },
             title: "/country/greenland"
        },
        "/country/unitedstates": {
             data: unitedStatesData,
             center: {
                lat: 37.09024,
                lng: -95.712891,
                zoom: 3
             },
             title: "/country/unitedstates"
        },
         // COUNTRY - OCEANIA
        "/country/australia": {
            data: australiaData,
            center: {
                lat: -26.7124597495182,
                lng: 135.0062277593736,
                zoom: 3
            },
            title: "/country/australia" 
        },
        "/country/newzealand": {
            data: newZealandData,
            center: {
                lat: -42.20395491641805,
                lng: 173.5438749106739,
                zoom: 3
            },
            title: "/country/newzealand" 
        },
        // SOUTH AMERICA
        "/country/argentina": {
             data: argentinaData,
             center: {
                lat: -38.416097,
                lng: -63.616672,
                zoom: 3
             },
             title: "/country/argentina"
        },
        "/country/brazil": {
             data: brazilData,
             center: {
                lat: -14.235004,
                lng: -51.92528,
                zoom: 3
             },
             title: "/country/brazil"
        },
        "/country/chile": {
             data: chileData,
             center: {
                lat: -35.675147,
                lng: -71.542969,
                zoom: 3
             },
             title: "/country/chile"
        },
        // STATUS OF JB
        "/status/reviewed": {
             data: globalData.filter(val => val.resortReview.score),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/status/reviewed"
        },
        "/status/notreviewed": {
             data: unitedStatesData.filter(val => !val.resortReview.score),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/status/notreviewed"
        },
        "/status/visited": {
             data: globalData.filter(val => val.videos.length > 0),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/status/visited"
        },
        "/status/notvisited": {
             data: unitedStatesData.filter(val => val.videos.length < 1),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/status/notVisited"
        },
        // PASSES
        "/pass/epic": {
             data: globalData.filter(val => val.skiPass.includes('Epic')),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/pass/epic"
        },
        "/pass/ikon": {
             data: globalData.filter(val => val.skiPass.includes('Ikon')),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/pass/ikon"
        },
        "/pass/mountaincollective": {
             data: globalData.filter(val => val.skiPass.includes('Mountain Collective')),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/pass/mountaincollective"
        },
        "/pass/indy": {
             data: globalData.filter(val => val.skiPass.includes('Indy')),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/pass/indy"
        },
        "/pass/powderalliance": {
             data: globalData.filter(val => val.skiPass.includes('Powder Alliance')),
             center: {
               lat: 39.485156977729474, 
               lng: -106.05312809324181,
               zoom: 3
            },
             title: "/pass/powderalliance"
        },
        "/pass/noPassAssociated": {
          data: globalData.filter(val => val.skiPass.length === 0),
          center: {
            lat: 39.485156977729474, 
            lng: -106.05312809324181,
            zoom: 3
         },
          title: "/pass/noPassAssociated"
     },
    };

})